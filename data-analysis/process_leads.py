import pandas as pd
import glob
import os

def process_leads(input_dir, output_file):
    all_files = glob.glob(os.path.join(input_dir, "*.csv"))
    
    df_list = []
    
    for filename in all_files:
        try:
            df = pd.read_csv(filename)
            df_list.append(df)
        except Exception as e:
            print(f"Error reading {filename}: {e}")
            
    if not df_list:
        print("No CSV files found.")
        return

    combined_df = pd.concat(df_list, ignore_index=True)

    # 4. Validate: Filter out bad emails
    initial_count = len(combined_df)
    combined_df = combined_df.dropna(subset=['Email'])
    combined_df = combined_df[combined_df['Email'].str.contains(r'[^@]+@[^@]+\.[^@]+')]
    final_count = len(combined_df)
    print(f"Dropped {initial_count - final_count} bad records.")

    # 1. Consolidate & Deduplicate
    # Sort by Timestamp to keep the most recent one
    combined_df['Timestamp'] = pd.to_datetime(combined_df['Timestamp'], format='mixed')
    combined_df = combined_df.sort_values('Timestamp', ascending=False)
    
    # Group by Email to aggregate data
    aggregation_functions = {
        'Scan ID': 'first',
        'Attendee ID': 'first',
        'First Name': 'first',
        'Last Name': 'first',
        'Title': 'first',
        'Company': 'first',
        'Phone': 'first',
        'Address': 'first',
        'City': 'first',
        'State': 'first',
        'Postal Code': 'first',
        'Country': 'first',
        'Lead Score': 'max', # 3. Aggregation: Keep highest Lead Score
        'Qualifiers': 'first',
        'Notes': lambda x: '; '.join(x.dropna().astype(str)), # 3. Aggregation: Append Notes
        'Timestamp': 'first', # 2. Conflict Resolution: Most recent
        'Session ID': lambda x: ';'.join(set(x.dropna().astype(str))) # 3. Aggregation: Combine distinct Session IDs
    }

    # Perform aggregation
    deduplicated_df = combined_df.groupby('Email').agg(aggregation_functions).reset_index()

    # 5. Score & Segment
    def segment_lead(score):
        if score > 75:
            return 'Hot'
        elif 40 <= score <= 75:
            return 'Warm'
        else:
            return 'Cold'

    deduplicated_df['Priority_Segment'] = deduplicated_df['Lead Score'].apply(segment_lead)

    # Save to CSV
    deduplicated_df.to_csv(output_file, index=False)
    print(f"Successfully saved cleaned data to {output_file}")
    
    # Calculate Key Metrics for the report
    total_raw = initial_count
    unique_leads = len(deduplicated_df)
    invalid_records = initial_count - final_count
    segment_counts = deduplicated_df['Priority_Segment'].value_counts()
    
    print("\nKey Metrics:")
    print(f"Total Raw Records: {total_raw}")
    print(f"Unique Leads: {unique_leads}")
    print(f"Invalid Records: {invalid_records}")
    print("Segment Breakdown:")
    print(segment_counts)

if __name__ == "__main__":
    process_leads("lead-scan", "crm_import_ready.csv")

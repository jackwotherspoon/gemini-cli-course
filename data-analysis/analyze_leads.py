import pandas as pd
import re
from collections import Counter

# 1. Load Data
df = pd.read_csv("crm_import_ready.csv")

# 2. Session ID to Title Mapping
session_map = {
    "BOOTH-121": "Demo Booth - Capital",
    "BOOTH-174": "Demo Booth - Suddenly",
    "BOOTH-248": "Demo Booth - Student",
    "BOOTH-524": "Demo Booth - Popular",
    "BOOTH-938": "Demo Booth - Type",
    "BRK2-191": "Brand Distributed Niches",
    "BRK2-192": "Streamline Customized Eyeballs",
    "BRK2-293": "Implement Strategic Communities",
    "BRK2-301": "Optimize Vertical Applications",
    "BRK2-377": "Redefine World-Class Bandwidth",
    "BRK2-561": "Disintermediate Back-End Web Services",
    "BRK2-692": "Transition Holistic Models",
    "BRK2-697": "Redefine World-Class E-Commerce",
    "BRK2-753": "Engage Distributed Infrastructures",
    "BRK2-793": "E-Enable Efficient Schemas",
    "CUSLT-138": "Unleash Real-Time Initiatives",
    "CUSLT-152": "E-Enable Dynamic Communities",
    "CUSLT-243": "Target Holistic Web Services",
    "CUSLT-335": "Aggregate Granular Synergies",
    "CUSLT-379": "Benchmark Synergistic Vortals",
    "CUSLT-441": "Transform Bleeding-Edge Bandwidth",
    "CUSLT-497": "Mesh Customized Web Services",
    "CUSLT-830": "Monetize Next-Generation Relationships",
    "CUSLT-902": "Re-Intermediate Rich Communities",
    "CUSLT-952": "Streamline Clicks-And-Mortar Functionalities",
    "LRN191": "Generate Extensible Relationships",
    "LRN314": "Transition Efficient Channels",
    "LRN349": "Maximize Real-Time Eyeballs",
    "LRN354": "Seize Next-Generation Bandwidth",
    "LRN455": "Cultivate Efficient Bandwidth",
    "LRN509": "Drive Rich Web Services",
    "LRN512": "Syndicate End-To-End Models",
    "LRN711": "Streamline B2C Experiences",
    "LRN713": "Scale Next-Generation E-Business",
    "LRN951": "E-Enable Next-Generation Web Services",
    "WRK-101": "Advanced Deep Learning Techniques",
    "WRK-102": "Neural Networks in Production",
    "WRK-103": "Natural Language Processing Workshop",
    "WRK-104": "Computer Vision Masterclass"
}

# 3. Audience Insights
print("--- Audience Insights ---")
print("Top 5 Companies:")
print(df['Company'].value_counts().head(5))
print("\nTop 5 Countries:")
print(df['Country'].value_counts().head(5))
print("\nTop 5 Job Titles:")
print(df['Title'].value_counts().head(5))

# 4. Conference Insights
# Explode Session IDs
sessions_list = []
for sessions in df['Session ID'].dropna():
    ids = [s.strip() for s in sessions.split(';')]
    sessions_list.extend(ids)

session_counts = Counter(sessions_list)
session_df = pd.DataFrame.from_dict(session_counts, orient='index', columns=['Count']).reset_index()
session_df.columns = ['Session ID', 'Count']
session_df['Title'] = session_df['Session ID'].map(session_map).fillna('Unknown')

# Categorize Session Type
def get_type(sid):
    if sid.startswith('BOOTH'): return 'Booth'
    if sid.startswith('BRK'): return 'Breakout'
    if sid.startswith('CUSLT'): return 'Consultation'
    if sid.startswith('LRN'): return 'Learning Lab'
    if sid.startswith('WRK'): return 'Workshop'
    return 'Other'

session_df['Type'] = session_df['Session ID'].apply(get_type)

print("\n--- Conference Insights ---")
print("Most Attended Sessions (Top 5):")
print(session_df.sort_values('Count', ascending=False).head(5)[['Title', 'Type', 'Count']])

print("\nMost Attended per Session Type:")
for stype in session_df['Type'].unique():
    top_session = session_df[session_df['Type'] == stype].sort_values('Count', ascending=False).head(1)
    if not top_session.empty:
        print(f"\nType: {stype}")
        print(top_session[['Title', 'Count']].to_string(index=False))

# Topic Analysis (Word Frequency in Titles)
words = []
print("\n--- Debug: Titles being analyzed ---")
for title in session_df['Title']:
    if title != 'Unknown':
        # Simple cleanup
        clean_title = title.lower().replace('-', ' ').replace('  ', ' ')
        clean_title = re.sub(r'[^\w\s]', '', clean_title)
        split_words = [w for w in clean_title.split() if w not in ['and', 'to', 'in', 'of', 'for', 'the', 'a', 'with', 'demo', 'booth']]
        words.extend(split_words)
        # print(f"Original: {title} -> Clean: {clean_title} -> Words: {split_words}")

topic_counts = Counter(words)
print("\nPopular Session Topics (Keywords):")
print(topic_counts.most_common(10))

# Hot Leads Analysis
hot_leads = df[df['Priority_Segment'] == 'Hot']
print("\n--- Hot Leads Analysis ---")
print("Top Countries for Hot Leads:")
print(hot_leads['Country'].value_counts().head(5))
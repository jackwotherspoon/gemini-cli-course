from flask import Flask, render_template
import pandas as pd
import os

app = Flask(__name__)

DATA_FILE = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'crm_import_ready.csv')

def load_data():
    if not os.path.exists(DATA_FILE):
        return pd.DataFrame()
    return pd.read_csv(DATA_FILE)

@app.route('/')
def dashboard():
    df = load_data()
    
    if df.empty:
        return "No data found. Please run the lead processing script first."

    # KPI Metrics
    total_leads = len(df)
    hot_leads = len(df[df['Priority_Segment'] == 'Hot'])
    warm_leads = len(df[df['Priority_Segment'] == 'Warm'])
    cold_leads = len(df[df['Priority_Segment'] == 'Cold'])

    # Charts Data
    
    # 1. Lead Segmentation (Pie Chart)
    segment_counts = df['Priority_Segment'].value_counts()
    segment_data = {
        'labels': segment_counts.index.tolist(),
        'data': segment_counts.values.tolist()
    }

    # 2. Top 5 Companies (Bar Chart)
    top_companies = df['Company'].value_counts().head(5)
    company_data = {
        'labels': top_companies.index.tolist(),
        'data': top_companies.values.tolist()
    }

    # 3. Top Countries (Map/List)
    top_countries = df['Country'].value_counts().head(10)
    country_data = {
        'labels': top_countries.index.tolist(),
        'data': top_countries.values.tolist()
    }
    
    # 4. Recent Hot Leads (Table)
    recent_hot_leads = df[df['Priority_Segment'] == 'Hot'].sort_values('Timestamp', ascending=False).head(10)
    recent_hot_leads = recent_hot_leads[['First Name', 'Last Name', 'Company', 'Title', 'Country', 'Lead Score']].to_dict('records')

    return render_template('dashboard.html', 
                           total_leads=total_leads,
                           hot_leads=hot_leads,
                           warm_leads=warm_leads,
                           cold_leads=cold_leads,
                           segment_data=segment_data,
                           company_data=company_data,
                           country_data=country_data,
                           recent_hot_leads=recent_hot_leads)

if __name__ == '__main__':
    app.run(debug=True, port=5001)

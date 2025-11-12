# Education Outcomes EDA - Artifact Provenance

## Source Information

**Repository:** [tiwa-codes/education-outcomes-eda](https://github.com/tiwa-codes/education-outcomes-eda)  
**Commit SHA:** `762f06407fc607bc1cc450b8b5008bef198a465c`  
**Commit Date:** Wed Nov 12 03:50:41 2025 +0100  
**Original Path:** `reporting-outputs/`

## Artifacts Included

### Writing Samples
- **writing-samples/education-exec-summary.md** - Executive summary for education investment
  - [View on GitHub](https://github.com/tiwa-codes/education-outcomes-eda/blob/762f06407fc607bc1cc450b8b5008bef198a465c/reporting-outputs/writing-samples/education-exec-summary.md)

### Resume Materials
- **resume/resume-bullets-education.md** - Professional resume bullets highlighting data analysis skills

## How to Reproduce

### Prerequisites
```bash
# Python 3.8+
pip install pandas numpy scikit-learn matplotlib seaborn plotly jupyter
```

### Steps to Regenerate Artifacts

1. **Clone the repository**
   ```bash
   git clone https://github.com/tiwa-codes/education-outcomes-eda.git
   cd education-outcomes-eda
   ```

2. **Check out the specific commit (optional, for exact reproduction)**
   ```bash
   git checkout 762f06407fc607bc1cc450b8b5008bef198a465c
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Generate sample data**
   ```bash
   python generate_education_data.py
   ```

5. **Run exploratory data analysis**
   ```bash
   jupyter notebook education_outcomes_eda.ipynb
   # Run all cells to generate visualizations and insights
   ```

6. **Generate reporting outputs**
   ```bash
   # Writing samples and resume materials are crafted from analysis insights
   cd reporting-outputs
   ```

## Project Summary

This project examines factors associated with basic literacy across Nigeria's 37 states, using statistical modeling and machine learning to identify the strongest predictors of literacy success and inform education policy.

**Key Findings:**
- ML models achieved 95.7% accuracy in predicting literacy outcomes
- **Textbook availability**: 37% higher literacy odds per unit increase
- **Mother's education**: 35% higher odds per year of schooling
- **Enrollment rates**: 36% higher odds
- **Household poverty**: 22% reduction in literacy odds

**Equity Insights:**
- Urban vs. rural gap: 3.7 percentage points higher literacy in urban areas
- State-level performance varies: 79.7% to 98.4%
- Disparities correlate with teacher availability, infrastructure, travel time

**Deliverables:**
- Interactive dashboard for education officials
- Policy brief with 5 evidence-based recommendations
- Fully reproducible analysis pipeline
- Data generation scripts for demonstration purposes

**Methodology:**
- Dataset: 88,800 individual records across 37 states
- Models: Logistic regression with 10 features
- Validation: 5-fold cross-validation
- Tools: Python (pandas, scikit-learn, matplotlib, plotly)

## Policy Recommendations

1. Prioritize textbook distribution programs
2. Support mother's education initiatives
3. Increase teacher availability in rural areas
4. Invest in rural infrastructure (electricity, internet)
5. Implement poverty reduction interventions alongside education programs

## Contact

For questions about the analysis methodology or data, refer to the [source repository](https://github.com/tiwa-codes/education-outcomes-eda).

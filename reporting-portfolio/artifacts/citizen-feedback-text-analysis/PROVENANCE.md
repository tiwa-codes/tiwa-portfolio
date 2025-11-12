# Citizen Feedback Text Analysis - Artifact Provenance

## Source Information

**Repository:** [tiwa-codes/citizen-feedback-text-analysis](https://github.com/tiwa-codes/citizen-feedback-text-analysis)  
**Commit SHA:** `6c00277bf144497f704f40fb6f5b771ed4baa92b`  
**Commit Date:** Wed Nov 12 03:39:36 2025 +0100  
**Original Path:** `reporting-outputs/`

## Artifacts Included

### Reports
- **citizen-feedback-report.md** - Main donor report analyzing citizen feedback patterns
  - [View on GitHub](https://github.com/tiwa-codes/citizen-feedback-text-analysis/blob/6c00277bf144497f704f40fb6f5b771ed4baa92b/reporting-outputs/citizen-feedback-report.md)
- **citizen-feedback-report.pdf** - PDF version of the donor report

### Figures
- `figures/` - Visualizations including topic distribution, sentiment analysis, and geographic patterns

### Annex
- `annex/citizen-feedback-links.md` - Links to interactive dashboards and visualizations

## How to Reproduce

### Prerequisites
```bash
# Python 3.8+
pip install pandas numpy scikit-learn nltk spacy matplotlib seaborn
python -m spacy download en_core_web_sm
```

### Steps to Regenerate Artifacts

1. **Clone the repository**
   ```bash
   git clone https://github.com/tiwa-codes/citizen-feedback-text-analysis.git
   cd citizen-feedback-text-analysis
   ```

2. **Check out the specific commit (optional, for exact reproduction)**
   ```bash
   git checkout 6c00277bf144497f704f40fb6f5b771ed4baa92b
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Generate sample data and run analysis**
   ```bash
   # See project README for specific commands
   python generate_sample_feedback.py
   python topic_modeling.py
   python sentiment_analysis.py
   ```

5. **Generate reporting outputs**
   ```bash
   cd reporting-outputs
   # Generate visualizations
   python generate_figures.py
   # Convert to PDF if needed
   pandoc citizen-feedback-report.md -o citizen-feedback-report.pdf
   ```

## Project Summary

This project analyzes citizen feedback collected through multiple channels across Nigeria, using natural language processing and topic modeling to identify key themes, sentiment patterns, and actionable insights for service delivery improvement.

**Key Findings:**
- 100 feedback entries analyzed from 34 states
- 53% negative sentiment indicating service delivery challenges
- Infrastructure and equipment issues dominate (25% of concerns)
- Staff availability and facility closure affect service access
- Multi-channel feedback system captures diverse citizen voices

**Methodology:**
- Latent Dirichlet Allocation (LDA) for topic modeling
- Sentiment analysis using VADER and TextBlob
- Geographic visualization of feedback patterns

## Contact

For questions about the source data or methodology, refer to the [source repository](https://github.com/tiwa-codes/citizen-feedback-text-analysis).

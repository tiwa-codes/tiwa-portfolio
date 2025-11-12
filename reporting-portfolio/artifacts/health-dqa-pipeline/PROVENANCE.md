# Health DQA Pipeline - Artifact Provenance

## Source Information

**Repository:** [tiwa-codes/health-dqa-pipeline](https://github.com/tiwa-codes/health-dqa-pipeline)  
**Commit SHA:** `6ef8d2ec9b347e6be0bdcc6c4da5a7ed3ffed733`  
**Commit Date:** Wed Nov 12 03:20:35 2025 +0100  
**Original Path:** `reporting-outputs/`

## Artifacts Included

### Reports
- **health-dqa-report.md** - Main donor report for health data quality assessment
  - [View on GitHub](https://github.com/tiwa-codes/health-dqa-pipeline/blob/6ef8d2ec9b347e6be0bdcc6c4da5a7ed3ffed733/reporting-outputs/health-dqa-report.md)
- **health-dqa-report.pdf** - PDF version of the donor report

### Figures
- `figures/` - Visualizations and charts supporting the report

### Annex
- `annex/` - Supporting documentation and logs

### Scripts
- **generate_donor_charts.py** - Script to generate visualization charts
- **convert_to_pdf.py** - Script to convert markdown to PDF

## How to Reproduce

### Prerequisites
```bash
# Python 3.8+
pip install pandas matplotlib seaborn jupyter
```

### Steps to Regenerate Artifacts

1. **Clone the repository**
   ```bash
   git clone https://github.com/tiwa-codes/health-dqa-pipeline.git
   cd health-dqa-pipeline
   ```

2. **Check out the specific commit (optional, for exact reproduction)**
   ```bash
   git checkout 6ef8d2ec9b347e6be0bdcc6c4da5a7ed3ffed733
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Generate data and run analysis**
   ```bash
   # See project README for specific commands
   python generate_sample_data.py
   jupyter notebook analysis.ipynb
   ```

5. **Generate reporting outputs**
   ```bash
   cd reporting-outputs
   python generate_donor_charts.py
   python convert_to_pdf.py health-dqa-report.md
   ```

## Project Summary

This project conducts comprehensive Data Quality Assessment (DQA) of Nigeria's routine health facility reporting system, analyzing 28,798 reports from 1,200 facilities across all 37 states over 24 months. Key metrics include completeness, timeliness, consistency, and data validation.

**Key Findings:**
- National data quality score: 90.2/100 (Grade A)
- Completeness: 95.9%
- Consistency: 99.1%
- Timeliness challenge: Only 28% of reports submitted on time

## Contact

For questions about the source data or methodology, refer to the [source repository](https://github.com/tiwa-codes/health-dqa-pipeline).

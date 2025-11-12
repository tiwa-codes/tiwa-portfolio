# Reporting Portfolio - Project Artifacts Index

Welcome to the Tiwa Codes Reporting Portfolio. This index provides links to all consolidated project reports, briefs, and artifacts from across the portfolio.

---

## 📊 Data Quality & Health Systems

### Health Data Quality Assessment Pipeline
**Project Brief**: Comprehensive DQA of Nigeria's routine health facility reporting system  
**Status**: Completed - Q4 2025  
**Key Artifacts**:
- [Health DQA Report (Markdown)](./artifacts/health-dqa-pipeline/health-dqa-report.md) - Main donor report
- [Health DQA Report (PDF)](./artifacts/health-dqa-pipeline/health-dqa-report.pdf) - PDF version
- [Figures](./artifacts/health-dqa-pipeline/figures/) - Supporting visualizations

**Summary**: Analyzed 28,798 reports from 1,200 facilities across 37 states. Achieved 90.2/100 national data quality score with strong performance in completeness (95.9%), consistency (99.1%), and duplicate control (98.1%). Identified timeliness as key improvement area (28% on-time submission).

**Source Repository**: [tiwa-codes/health-dqa-pipeline](https://github.com/tiwa-codes/health-dqa-pipeline)  
**Commit SHA**: `6ef8d2ec9b347e6be0bdcc6c4da5a7ed3ffed733`  
**Provenance**: [View Details](./artifacts/health-dqa-pipeline/PROVENANCE.md)

---

## 📝 Citizen Feedback & Text Analysis

### Citizen Feedback Text Analysis
**Project Brief**: NLP-powered analysis of citizen feedback for service delivery improvement  
**Status**: Completed - November 2025  
**Key Artifacts**:
- [Citizen Feedback Report (Markdown)](./artifacts/citizen-feedback-text-analysis/citizen-feedback-report.md) - Main analysis report
- [Citizen Feedback Report (PDF)](./artifacts/citizen-feedback-text-analysis/citizen-feedback-report.pdf) - PDF version
- [Figures](./artifacts/citizen-feedback-text-analysis/figures/) - Topic models, sentiment analysis, geographic patterns

**Summary**: Analyzed 100 feedback entries from 34 states using LDA topic modeling and sentiment analysis. Identified 53% negative sentiment indicating service delivery challenges, with infrastructure/equipment issues dominating (25%). Multi-channel feedback system captures diverse citizen voices.

**Source Repository**: [tiwa-codes/citizen-feedback-text-analysis](https://github.com/tiwa-codes/citizen-feedback-text-analysis)  
**Commit SHA**: `6c00277bf144497f704f40fb6f5b771ed4baa92b`  
**Provenance**: [View Details](./artifacts/citizen-feedback-text-analysis/PROVENANCE.md)

---

## 🏥 Telehealth & Digital Health

### NTAL Telehealth Platform
**Project Brief**: Inclusive telehealth via USSD/SMS/WhatsApp with offline-first CHW app  
**Status**: MVP - Production Ready  
**Key Artifacts**:
- [NTAL Program Brief](./artifacts/NTAL/briefs/ntal-brief.md) - Comprehensive platform overview
- [Figures](./artifacts/NTAL/figures/) - Architecture diagrams, UI screenshots

**Summary**: Multi-channel telehealth platform providing accessible healthcare to underserved populations. Features USSD for feature phones, SMS, WhatsApp, and web interfaces with store-and-forward triage model. Offline-first CHW app with FHIR-based clinical data standards and built-in consent management.

**Target Users**: Rural communities with limited internet, feature phone users, healthcare providers (doctors, nurses, CHWs)

**Source Repository**: [tiwa-codes/NTAL](https://github.com/tiwa-codes/NTAL)  
**Commit SHA**: `d9efb69f669511e07aa64e600d75249b5fa6dc26`  
**Provenance**: [View Details](./artifacts/NTAL/PROVENANCE.md)

---

## 📖 Faith Tech & Church Technology

### Scripture Sync
**Project Brief**: Offline real-time Scripture Assistant for church services  
**Status**: Production Ready v1.0.0  
**Key Artifacts**:
- [Scripture Sync Brief](./artifacts/scripture-sync/briefs/scripture-sync-brief.md) - Complete program overview
- [Figures](./artifacts/scripture-sync/figures/) - System architecture, UI screenshots

**Summary**: Automatically transcribes spoken sermons, matches to Bible verses, and projects in real-time. Achieves <2 second latency with >60% matching accuracy (actual: 1.8s, 64%). Fully offline-capable with operator control interface. Supports multiple Bible translations (KJV, NIV, ESV, NKJV).

**Target Users**: Churches (100-500 congregants), conference organizers (1,000-5,000 attendees), Bible study groups

**Source Repository**: [tiwa-codes/scripture-sync](https://github.com/tiwa-codes/scripture-sync)  
**Commit SHA**: `f6c9c931de916e6cee737cc74984f251cef1ea5b`  
**Provenance**: [View Details](./artifacts/scripture-sync/PROVENANCE.md)

---

## 📚 Education & Social Impact

### Education Outcomes Exploratory Data Analysis
**Project Brief**: Data-driven insights for education investment in Nigeria  
**Status**: Analysis Completed - 2025  
**Key Artifacts**:
- [Executive Summary](./artifacts/education-outcomes-eda/writing-samples/education-exec-summary.md) - Key findings for stakeholders
- [Resume Bullets](./artifacts/education-outcomes-eda/resume/) - Professional impact statements

**Summary**: Machine learning analysis (95.7% accuracy) of 88,800 records across 37 states identified key literacy drivers: textbook availability (+37% odds), mother's education (+35%), enrollment rates (+36%). Poverty reduces literacy odds by 22%. Highlighted urban-rural gap (3.7 percentage points) and state-level disparities (79.7% to 98.4%).

**Deliverables**: Interactive dashboard, policy brief with 5 evidence-based recommendations, fully reproducible analysis pipeline

**Source Repository**: [tiwa-codes/education-outcomes-eda](https://github.com/tiwa-codes/education-outcomes-eda)  
**Commit SHA**: `762f06407fc607bc1cc450b8b5008bef198a465c`  
**Provenance**: [View Details](./artifacts/education-outcomes-eda/PROVENANCE.md)

---

## 📋 Templates & Standards

### Reporting Resources
- [Donor Report Template](./donor-report-template.md) - Reusable template for all donor reports
- [Reporting SOP](./reporting-sop.md) - Standard Operating Procedure for reporting
- [Portfolio README](./README.md) - Overview and usage instructions

---

## 🔄 Reproducibility

All artifacts include:
- ✅ Source repository and commit SHA
- ✅ Original file paths and GitHub URLs
- ✅ Reproduction instructions
- ✅ Dependencies and setup requirements

To regenerate any artifact, see the `PROVENANCE.md` file in the respective artifact directory.

---

## 📊 Portfolio Statistics

| Metric | Count |
|--------|-------|
| Total Projects | 5 |
| Main Reports/Briefs | 5 |
| PDF Reports | 2 |
| Figures/Visualizations | 5 directories |
| Source Repositories | 5 |
| Combined Data Points Analyzed | 100,000+ |
| Geographic Coverage | Nigeria (37 states) |

---

## 🔍 Navigation Tips

- **By Domain**: Use section headers to find projects by area (health, education, technology)
- **By Type**: Look for "Report", "Brief", or "Analysis" in artifact descriptions
- **By Status**: Check project status (Completed, Production Ready, MVP)
- **By Impact**: Review summary sections for key findings and metrics

---

## 📞 Contact

For questions about specific projects, refer to the source repository linked in each section. For general portfolio inquiries, visit [tiwa-codes/tiwa-portfolio](https://github.com/tiwa-codes/tiwa-portfolio).

---

*Last Updated: November 12, 2025*  
*Portfolio maintained by: Tiwa Codes*

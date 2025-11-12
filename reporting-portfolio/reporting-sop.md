# Reporting Standard Operating Procedure (SOP)

**Version**: 1.0  
**Last Updated**: 2025-11-12  
**Owner**: Tiwa Codes Portfolio

---

## Purpose

This SOP defines the standard process for creating, maintaining, and delivering project reports across the Tiwa Codes portfolio. It ensures consistency, quality, and timely delivery of reporting artifacts.

---

## Scope

This SOP applies to:
- Donor reports and progress updates
- Technical reports and documentation
- Data analysis and visualization outputs
- Project milestone reports

---

## Reporting Schedule

### Regular Reports
- **Monthly Reports**: Due by the 5th of the following month
- **Quarterly Reports**: Due within 15 days of quarter end
- **Annual Reports**: Due within 30 days of year end
- **Ad-hoc Reports**: As requested with agreed timeline

### Report Types
1. **Progress Reports**: Activities, outputs, and outcomes
2. **Financial Reports**: Budget utilization and variances
3. **Technical Reports**: Methodology, analysis, and findings
4. **Impact Reports**: Results, beneficiaries, and success stories

---

## Reporting Process

### 1. Preparation Phase
**Timeline**: Start 2 weeks before due date

- [ ] Review reporting requirements and template
- [ ] Gather data from project tracking systems
- [ ] Collect supporting documents (receipts, photos, data files)
- [ ] Schedule interviews with stakeholders if needed
- [ ] Verify data accuracy and completeness

### 2. Drafting Phase
**Timeline**: 1 week before due date

- [ ] Use appropriate template from `reporting-portfolio/`
- [ ] Write content following template structure
- [ ] Include quantitative and qualitative data
- [ ] Add visualizations and supporting evidence
- [ ] Cite sources and include provenance information
- [ ] Draft executive summary

### 3. Review Phase
**Timeline**: 3-5 days before due date

- [ ] Internal review by project team
- [ ] Technical review for accuracy
- [ ] Financial review for budget sections
- [ ] Proofreading for language and formatting
- [ ] Compliance check against donor requirements

### 4. Approval Phase
**Timeline**: 2 days before due date

- [ ] Submit to project lead for approval
- [ ] Incorporate feedback and revisions
- [ ] Final sign-off from authorized personnel

### 5. Submission Phase
**Timeline**: On or before due date

- [ ] Format report per recipient requirements (PDF, Word, etc.)
- [ ] Archive a copy in `reporting-portfolio/artifacts/`
- [ ] Submit via agreed channel (email, portal, etc.)
- [ ] Confirm receipt with recipient
- [ ] Update tracking log

---

## Quality Standards

### Content Requirements
- **Accuracy**: All data must be verifiable and traceable
- **Completeness**: Address all required sections
- **Clarity**: Use clear, concise language
- **Objectivity**: Present balanced view including challenges
- **Relevance**: Focus on information meaningful to audience

### Format Requirements
- **Professional**: Use consistent formatting and branding
- **Accessible**: Clear structure with headers and bullet points
- **Visual**: Include charts, graphs, and images where appropriate
- **Proofread**: No spelling or grammatical errors
- **Branded**: Include organizational logo and contact information

### Data Requirements
- **Disaggregated**: Break down by gender, age, location as relevant
- **Validated**: Cross-check figures across sources
- **Sourced**: Cite data sources and collection methods
- **Current**: Use most recent available data
- **Archived**: Store raw data for future reference

---

## Artifact Management

### Generating Reports from Source Repositories

When creating reports from project data:

1. **Clone the source repository**
   ```bash
   git clone https://github.com/tiwa-codes/[repo-name]
   cd [repo-name]
   ```

2. **Check for reporting outputs directory**
   ```bash
   ls reporting-outputs/
   ```

3. **Run analysis/reporting scripts**
   ```bash
   # See project-specific README for exact commands
   # Common patterns:
   python generate_report.py
   jupyter nbconvert --to markdown analysis.ipynb
   Rscript generate_report.R
   ```

4. **Copy artifacts to reporting-portfolio**
   ```bash
   cp reporting-outputs/* ../tiwa-portfolio/reporting-portfolio/artifacts/[repo-name]/
   ```

5. **Document provenance**
   - Record commit SHA: `git rev-parse HEAD`
   - Note generation date
   - Update artifact README

### Version Control
- All reports stored in version control (Git)
- Clear commit messages describing changes
- Tag releases for major reports
- Branch naming: `reporting/[project]-[period]`

---

## Tools and Templates

### Standard Templates
- [Donor Report Template](./donor-report-template.md)
- Technical Report Template (to be added)
- Executive Summary Template (to be added)

### Recommended Tools
- **Data Analysis**: Python (pandas, matplotlib), R, Jupyter notebooks
- **Visualization**: Tableau, matplotlib, ggplot2, D3.js
- **Document Creation**: Markdown, LaTeX, Google Docs, Microsoft Word
- **Version Control**: Git, GitHub
- **Collaboration**: Google Workspace, Microsoft Teams

---

## Roles and Responsibilities

### Project Lead
- Overall accountability for report quality and timeliness
- Final approval before submission
- Stakeholder communication

### Data Analyst
- Data collection and validation
- Analysis and visualization creation
- Technical accuracy review

### Writer/Editor
- Content drafting and structuring
- Language and grammar review
- Template compliance

### Finance Officer
- Budget data accuracy
- Financial section review
- Expense documentation

---

## Troubleshooting

### Common Issues and Solutions

**Issue**: Missing data for key indicators  
**Solution**: Use partial data with notes; contact data owners; estimate with clear methodology

**Issue**: Late submission risk  
**Solution**: Notify stakeholders early; provide interim update; request extension if needed

**Issue**: Conflicting data from multiple sources  
**Solution**: Document discrepancies; triangulate with third source; use most recent/reliable

**Issue**: Report too long or too short  
**Solution**: Review template requirements; prioritize key messages; use annexes for detail

---

## Continuous Improvement

### Review and Updates
- This SOP will be reviewed annually
- Updates based on donor feedback and lessons learned
- Team input solicited during quarterly reviews

### Feedback Collection
- Post-submission review meeting
- Donor feedback incorporation
- Process improvement log

---

## References

- [Reporting Portfolio README](./README.md)
- [Donor Report Template](./donor-report-template.md)
- [Project Artifacts Index](./index.md)

---

## Change Log

| Version | Date | Changes | Updated By |
|---------|------|---------|------------|
| 1.0 | 2025-11-12 | Initial SOP created | Tiwa Codes |

---

*For questions or suggestions about this SOP, please open an issue in the [tiwa-portfolio repository](https://github.com/tiwa-codes/tiwa-portfolio).*

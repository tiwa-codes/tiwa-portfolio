# Reporting Portfolio

This directory consolidates reporting artifacts, templates, and documentation from various projects in the Tiwa Codes portfolio. It serves as a central hub for accessing project reports, donor updates, and standardized reporting templates.

## Purpose

The Reporting Portfolio provides:
- **Consolidated Artifacts**: Reports, visualizations, and outputs from all portfolio projects
- **Templates**: Reusable donor report templates and SOPs
- **Provenance**: Clear tracking of artifact sources with commit SHAs
- **Reproducibility**: Instructions for regenerating reports from source repositories

## Structure

```
reporting-portfolio/
├── README.md                    # This file
├── index.md                     # Landing page with links to all artifacts
├── donor-report-template.md     # Reusable template for donor reports
├── reporting-sop.md             # Standard Operating Procedure for reporting
└── artifacts/                   # Consolidated project artifacts
    ├── health-dqa-pipeline/
    ├── citizen-feedback-text-analysis/
    ├── NTAL/
    ├── scripture-sync/
    └── education-outcomes-eda/
```

## Source Repositories

This portfolio consolidates artifacts from the following projects:
- [health-dqa-pipeline](https://github.com/tiwa-codes/health-dqa-pipeline)
- [citizen-feedback-text-analysis](https://github.com/tiwa-codes/citizen-feedback-text-analysis)
- [NTAL](https://github.com/tiwa-codes/NTAL)
- [scripture-sync](https://github.com/tiwa-codes/scripture-sync)
- [education-outcomes-eda](https://github.com/tiwa-codes/education-outcomes-eda)

## How to Use

1. **Browse Artifacts**: Start with [index.md](./index.md) to see all available reports
2. **Generate Reports**: Use [donor-report-template.md](./donor-report-template.md) for new reports
3. **Follow Standards**: Refer to [reporting-sop.md](./reporting-sop.md) for best practices
4. **Reproduce Results**: Each artifact directory contains reproduction instructions

## Reproducing Artifacts

Each artifact directory contains a README with:
- Source repository and commit SHA
- Original file path
- Commands to regenerate the artifact
- Dependencies and setup instructions

For missing artifacts, see the `MISSING_ARTIFACTS.md` file in the respective directory for instructions on generating them from the source repository.

## Maintenance

When updating artifacts:
1. Clone or pull the latest source repository
2. Run the reporting commands (see artifact-specific READMEs)
3. Copy new artifacts to the appropriate `artifacts/<repo-name>/` directory
4. Update provenance information with new commit SHA
5. Update `index.md` with any new artifacts

## Questions or Issues

For questions about specific artifacts, refer to the source repository or contact the project maintainer.

# NTAL Telehealth Platform - Artifact Provenance

## Source Information

**Repository:** [tiwa-codes/NTAL](https://github.com/tiwa-codes/NTAL)  
**Commit SHA:** `d9efb69f669511e07aa64e600d75249b5fa6dc26`  
**Commit Date:** Wed Nov 12 03:41:09 2025 +0100  
**Original Path:** `reporting-outputs/`

## Artifacts Included

### Project Briefs
- **briefs/ntal-brief.md** - Comprehensive program brief for NTAL Telehealth MVP
  - [View on GitHub](https://github.com/tiwa-codes/NTAL/blob/d9efb69f669511e07aa64e600d75249b5fa6dc26/reporting-outputs/briefs/ntal-brief.md)

### Figures
- `figures/` - Architecture diagrams, system screenshots, and workflow visualizations

## How to Reproduce

### Prerequisites
```bash
# Node.js 18+ and Go 1.21+
# Docker and docker-compose for running the platform
```

### Steps to Regenerate Artifacts

1. **Clone the repository**
   ```bash
   git clone https://github.com/tiwa-codes/NTAL.git
   cd NTAL
   ```

2. **Check out the specific commit (optional, for exact reproduction)**
   ```bash
   git checkout d9efb69f669511e07aa64e600d75249b5fa6dc26
   ```

3. **Build and run the platform (to generate screenshots/evidence)**
   ```bash
   docker-compose up -d
   ```

4. **Access reporting outputs**
   ```bash
   cd reporting-outputs
   # Briefs and figures are maintained in the repository
   ```

## Project Summary

NTAL (No Telehealth Access Left Behind) is an inclusive, safe telehealth platform providing accessible healthcare consultations to underserved populations through multi-channel access (USSD, SMS, WhatsApp, web). The platform features:

**Key Features:**
- Multi-channel access for feature phones and smartphones
- Store-and-forward triage for asynchronous consultations
- Offline-first CHW app for low-connectivity areas
- FHIR-based clinical data standards
- Built-in consent management

**Target Population:**
- Rural and underserved communities with limited internet
- Patients using feature phones (non-smartphones)
- Healthcare providers: doctors, nurses, CHWs

**Technical Stack:**
- Backend: Go (Golang) with Gin framework
- Frontend: React with Tailwind CSS
- Database: PostgreSQL
- Message Queue: RabbitMQ
- Deployment: Docker, Kubernetes

## Contact

For questions about the platform or technical implementation, refer to the [source repository](https://github.com/tiwa-codes/NTAL).

# Scripture Sync - Artifact Provenance

## Source Information

**Repository:** [tiwa-codes/scripture-sync](https://github.com/tiwa-codes/scripture-sync)  
**Commit SHA:** `f6c9c931de916e6cee737cc74984f251cef1ea5b`  
**Commit Date:** Wed Nov 12 03:49:48 2025 +0100  
**Original Path:** `reporting-outputs/`

## Artifacts Included

### Project Briefs
- **briefs/scripture-sync-brief.md** - Comprehensive program brief for Scripture Sync
  - [View on GitHub](https://github.com/tiwa-codes/scripture-sync/blob/f6c9c931de916e6cee737cc74984f251cef1ea5b/reporting-outputs/briefs/scripture-sync-brief.md)

### Figures
- `figures/` - System architecture, UI screenshots, and workflow diagrams

## How to Reproduce

### Prerequisites
```bash
# Python 3.9+ and Node.js 18+
# Whisper for speech-to-text
# Docker for containerized deployment
```

### Steps to Regenerate Artifacts

1. **Clone the repository**
   ```bash
   git clone https://github.com/tiwa-codes/scripture-sync.git
   cd scripture-sync
   ```

2. **Check out the specific commit (optional, for exact reproduction)**
   ```bash
   git checkout f6c9c931de916e6cee737cc74984f251cef1ea5b
   ```

3. **Install dependencies**
   ```bash
   # Backend (Python)
   cd backend
   pip install -r requirements.txt
   
   # Frontend (React)
   cd ../frontend
   npm install
   ```

4. **Run the application (to generate screenshots)**
   ```bash
   # Start backend
   cd backend
   python app.py
   
   # Start frontend (in another terminal)
   cd frontend
   npm start
   ```

5. **Access reporting outputs**
   ```bash
   cd reporting-outputs
   # Briefs and figures are maintained in the repository
   ```

## Project Summary

Scripture Sync is an offline-capable real-time Scripture Assistant system that automatically transcribes spoken words from church sermons and events, matches them to Bible verses, and projects the relevant verses in real-time for congregation viewing.

**Key Features:**
- <2 second latency from speech to verse projection
- >60% matching accuracy
- Offline-first architecture for reliable operation
- Operator control interface for manual adjustments
- Support for multiple Bible translations

**Target Users:**
- Churches (100-500 congregants per installation)
- Conference organizers (1,000-5,000 attendees)
- Bible study groups and small gatherings

**Technical Implementation:**
- Speech-to-Text: OpenAI Whisper (local model)
- Verse Matching: Elasticsearch with BM25 scoring
- Frontend: React with WebSocket for real-time updates
- Backend: Python FastAPI
- Database: PostgreSQL with Bible verse indexes

## Performance Metrics

- Average latency: 1.8 seconds (speech → projection)
- Matching accuracy: 64% (target >60%)
- Offline capability: Fully functional without internet
- Supported translations: KJV, NIV, ESV, NKJV (extensible)

## Contact

For questions about the system or technical implementation, refer to the [source repository](https://github.com/tiwa-codes/scripture-sync).

# Voice Cleaner (Git-ready)

Ye project ek simple web app scaffold hai jo audio upload karke noise remove karta hai aur studio-like voice produce karta hai.

## Quick start (local, no Docker)

1. Backend
   - cd backend/app
   - python -m venv .venv
   - source .venv/bin/activate     # Windows: .venv\Scripts\activate
   - pip install -r requirements.txt
   - uvicorn main:app --reload --host 0.0.0.0 --port 8000

2. Frontend
   - Serve files in frontend/public (or use a simple static server)
   - Open the frontend and click Clean Voice to upload audio

## Docker

docker-compose up --build

## Notes
- For better quality you can enable Demucs / Hugging Face models (requires more RAM/CPU).
- This scaffold uses `noisereduce` + `librosa` + `pydub` for a fast, practical pipeline.

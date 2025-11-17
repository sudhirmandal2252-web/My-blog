# main.py - FastAPI backend
from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import FileResponse
import uvicorn, shutil
from pathlib import Path
from model_utils import enhance_audio

app = FastAPI()
BASE_DIR = Path(__file__).resolve().parent
UPLOAD_DIR = BASE_DIR / "uploads"
OUTPUT_DIR = BASE_DIR / "outputs"
UPLOAD_DIR.mkdir(exist_ok=True)
OUTPUT_DIR.mkdir(exist_ok=True)

@app.post('/clean')
async def clean_audio(file: UploadFile = File(...), demucs: bool = Form(False)):
    # Save uploaded file
    in_path = UPLOAD_DIR / file.filename
    with open(in_path, 'wb') as f:
        shutil.copyfileobj(file.file, f)

    out_name = f"cleaned_{file.filename.rsplit('.',1)[0]}.wav"
    out_path = OUTPUT_DIR / out_name

    # Run enhancement pipeline
    enhance_audio(str(in_path), str(out_path), use_demucs=demucs)

    return FileResponse(path=str(out_path), filename=out_name, media_type='audio/wav')

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)

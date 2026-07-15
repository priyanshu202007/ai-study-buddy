from fastapi import APIRouter, UploadFile, File
import shutil
import os
from services.storage import save_document
from services.pdf_reader import extract_text

router = APIRouter()

UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = extract_text(file_path)
    save_document(file.filename, text)
    return {
        "filename": file.filename,
        "characters": len(text),
        "preview": text[:500]
    }
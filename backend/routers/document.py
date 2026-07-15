from fastapi import APIRouter, HTTPException
from services.storage import get_document

router = APIRouter()


@router.get("/document/{filename}")
def read_document(filename: str):
    text = get_document(filename)

    if text is None:
        raise HTTPException(status_code=404, detail="Document not found")

    return {
        "filename": filename,
        "text": text
    }
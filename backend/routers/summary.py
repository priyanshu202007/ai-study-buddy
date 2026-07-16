from fastapi import APIRouter, HTTPException

from services.storage import get_document
from services.summary_service import generate_summary

router = APIRouter()


@router.get("/summary/{filename}")
def summary(filename: str):
    text = get_document(filename)

    if text is None:
        raise HTTPException(status_code=404, detail="Document not found")

    summary = generate_summary(text)

    return {
        "filename": filename,
        "summary": summary
    }
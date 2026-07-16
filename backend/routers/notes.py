from fastapi import APIRouter, HTTPException
from services.storage import get_document
from services.notes_service import generate_notes

router = APIRouter()


@router.get("/notes/{filename}")
def notes(filename: str):
    text = get_document(filename)

    if text is None:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )

    notes = generate_notes(text)

    return {
        "filename": filename,
        "notes": notes
    }
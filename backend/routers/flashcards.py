from fastapi import APIRouter, HTTPException
from services.storage import get_document
from services.flashcards_service import generate_flashcards

router = APIRouter()


@router.get("/flashcards/{filename}")
def flashcards(filename: str):
    text = get_document(filename)

    if text is None:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )

    cards = generate_flashcards(text)

    return {
        "filename": filename,
        "flashcards": cards
    }
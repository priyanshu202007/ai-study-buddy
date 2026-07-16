from fastapi import APIRouter, HTTPException
from services.storage import get_document
from services.quiz_service import generate_quiz

router = APIRouter()


@router.get("/quiz/{filename}")
def quiz(filename: str):
    text = get_document(filename)

    if text is None:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )

    quiz = generate_quiz(text)

    return {
        "filename": filename,
        "quiz": quiz
    }
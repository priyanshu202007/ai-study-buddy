from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from services.storage import get_document
from services.chat_service import ask_question

router = APIRouter()


class ChatRequest(BaseModel):
    filename: str
    question: str
    user_id: str


@router.post("/chat")
def chat(request: ChatRequest):

    text = get_document(request.filename)

    if text is None:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )

    answer = ask_question(
        text=text,
        question=request.question,
        user_id=request.user_id
    )

    return {
        "filename": request.filename,
        "question": request.question,
        "answer": answer
    }
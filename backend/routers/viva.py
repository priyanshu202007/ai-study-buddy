from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from services.storage import documents
from services.viva_service import start_viva, continue_viva

router = APIRouter(
    prefix="/viva",
    tags=["Viva"]
)


class VivaStartRequest(BaseModel):
    filename: str


class VivaContinueRequest(BaseModel):
    filename: str
    history: str
    answer: str


@router.post("/start")
def viva_start(request: VivaStartRequest):

    if request.filename not in documents:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )

    document_text = documents[request.filename]

    question = start_viva(document_text)

    return {
        "question": question
    }


@router.post("/continue")
def viva_continue(request: VivaContinueRequest):

    if request.filename not in documents:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )

    document_text = documents[request.filename]

    result = continue_viva(
        document_text=document_text,
        history=request.history,
        student_answer=request.answer,
    )

    return result
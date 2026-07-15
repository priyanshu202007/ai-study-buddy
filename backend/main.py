from fastapi import FastAPI
from routers.upload import router as upload_router
from routers.notes import router as notes_router
from routers.quiz import router as quiz_router
from routers.summary import router as summary_router
from routers.document import router as document_router
app = FastAPI(
    title="AI Study Buddy API",
    version="1.0"
)


@app.get("/")
def home():
    return {
        "message": "Welcome to AI Study Buddy!"
    }
app.include_router(upload_router)

app.include_router(notes_router)
app.include_router(quiz_router)
app.include_router(summary_router)
app.include_router(document_router)
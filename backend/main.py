from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.upload import router as upload_router
from routers.notes import router as notes_router
from routers.quiz import router as quiz_router
from routers.summary import router as summary_router
from routers.document import router as document_router
from routers.flashcards import router as flashcards_router
from routers.chat import router as chat_router

app = FastAPI(
    title="AI Study Buddy API",
    version="1.0"
)

# -------------------- CORS --------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------- Home --------------------

@app.get("/")
def home():
    return {
        "message": "Welcome to AI Study Buddy!"
    }

# -------------------- Routers --------------------

app.include_router(chat_router)
app.include_router(upload_router)
app.include_router(flashcards_router)
app.include_router(notes_router)
app.include_router(quiz_router)
app.include_router(summary_router)
app.include_router(document_router)
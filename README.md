# 📚 AI Study Buddy

> Your AI-powered learning assistant for smarter, faster, and personalized studying.

---

## 🚀 Overview

AI Study Buddy is an intelligent learning assistant that helps students learn from PDF study materials using AI.

Students can upload lecture notes, textbooks, or PDFs and instantly generate:

- 📝 Smart Notes
- 📄 AI Summary
- ❓ Quiz Questions
- 🧠 Flashcards
- 🤖 AI Chat
- 🎤 AI Viva Practice

Unlike traditional chatbots, AI Study Buddy also remembers user preferences using **Mem0**, making learning more personalized.

---

# ✨ Features

✅ PDF Upload

✅ AI Notes Generation

✅ AI Summary

✅ AI Quiz Generator

✅ AI Flashcards

✅ AI Chat

✅ AI Viva Mode

✅ Personalized Memory using Mem0

---
# 📸 Screenshots

## 🏠 Home Page

![Home](https://raw.githubusercontent.com/priyanshu202007/ai-study-buddy/main/assests/home.png)

---

## 📄 PDF Upload

![Upload](https://raw.githubusercontent.com/priyanshu202007/ai-study-buddy/main/assests/upload.png)

---

## 📝 AI Notes Generation

![Notes](https://raw.githubusercontent.com/priyanshu202007/ai-study-buddy/main/assests/notes.png)

...
---

## 🧠 Personalized Memory with Mem0

The assistant remembers user preferences across conversations.

Example:

User:
> My favorite programming language is Python.

Later...

User:
> Do you remember my favorite language?

AI:
> Yes, I remember. Your favorite programming language is Python.

![Memory](https://raw.githubusercontent.com/priyanshu202007/ai-study-buddy/main/assests/memory.png)

# 🏗️ Architecture

```
            React Frontend
                   │
                   ▼
           FastAPI Backend
            │            │
            ▼            ▼
        Groq API      Mem0 API
            │
            ▼
      AI Generated Responses
```

---

# 🛠️ Tech Stack

### Frontend

- React
- Vite
- Axios
- React Icons
- React Toastify

### Backend

- FastAPI
- Python
- Uvicorn

### AI

- Groq (Llama 3.3 70B)

### Memory

- Mem0

---

# 💡 How It Works

1. Upload a PDF.
2. Text is extracted from the document.
3. AI processes the content.
4. Users can generate:
   - Notes
   - Summary
   - Quiz
   - Flashcards
   - Chat
   - Viva
5. Mem0 stores important user preferences for personalized learning.

---

# 🎯 Demo

Example:

User:

> My favorite programming language is Python.

Later...

User:

> What is my favorite programming language?

AI:

> Your favorite programming language is Python.

---

# 📂 Project Structure

```
frontend/
backend/
uploads/
assets/
docs/
```
# 🚀 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/priyanshu202007/ai-study-buddy.git
cd ai-study-buddy
```

---

## 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start at:

```
http://localhost:5173
```

---

## 3. Backend Setup

```bash
cd backend

# Create Virtual Environment
python -m venv venv

# Activate Virtual Environment

# Windows
venv\Scripts\activate

# Linux / macOS
source venv/bin/activate

# Install Dependencies
pip install -r requirements.txt

# Start Backend
uvicorn main:app --reload
```

The backend will start at:

```
http://127.0.0.1:8000
```

Swagger API Documentation:

```
http://127.0.0.1:8000/docs
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** folder.

Example:

```env
GROQ_API_KEY=your_groq_api_key
MEM0_API_KEY=your_mem0_api_key
```

Replace the values with your own API keys.

---

# 📂 Project Structure

```
ai-study-buddy/
│
├── backend/
│   ├── routers/
│   ├── services/
│   ├── uploads/
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── assets/
├── docs/
├── README.md
├── LICENSE
└── .gitignore
```

---

# ▶️ Running the Application

Open **two terminals**.

### Terminal 1

```bash
cd backend
uvicorn main:app --reload
```

### Terminal 2

```bash
cd frontend
npm run dev
```

Open:

```
http://localhost:5173
```

Enjoy using **AI Study Buddy** 🎓🚀

---

# 👥 Team

Team Name: AI Study Buddy

---

# ❤️ Built For

Build in AI Hackathon

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

![Home](assets/home.png)

---

## 📄 PDF Upload

![Upload](assets/upload.png)

---

## 📝 AI Notes Generation

![Notes](assets/notes.png)

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

![Mem0](assets/memory.png)

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

---

# 👥 Team

Team Name: AI Study Buddy

---

# ❤️ Built For

Build in AI Hackathon

from groq import Groq
from dotenv import load_dotenv
import os

from services.memory_service import get_memory, save_memory

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def ask_question(text: str, question: str, user_id: str):

    

    memory = get_memory(user_id, question)

    prompt = f"""
You are an AI Study Buddy.

Relevant previous memories:
{memory}

Use the previous memories whenever they help answer the user's question.

If the answer exists in the study material, prefer the study material.

If the question is about the user's personal preferences or previous conversations,
use the retrieved memories.

Study Material:
{text[:4000]}

Question:
{question}

Answer clearly and simply.
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.2,
        max_tokens=700
    )

    answer = response.choices[0].message.content

    save_memory(
        user_id=user_id,
        user_message=question,
        assistant_message=answer
    )

    return answer
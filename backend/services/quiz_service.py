import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

def generate_quiz(text: str):
    prompt = f"""
Create 10 multiple choice questions from the following study material.

Format:

Q1.
A.
B.
C.
D.

Correct Answer:

{text[:4000]}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.3,
        max_tokens=700,
    )

    return response.choices[0].message.content
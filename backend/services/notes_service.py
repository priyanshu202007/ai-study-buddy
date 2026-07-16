import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_notes(text: str):
    prompt = f"""
Create clean study notes from the following study material.

Requirements:
- Use headings
- Use bullet points
- Highlight important formulas
- Keep it easy for a college student
- Organize topic-wise

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
        max_tokens=900
    )

    return response.choices[0].message.content
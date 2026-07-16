import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_summary(text: str):
    prompt = f"""
You are an AI Study Assistant.

Summarize the following study material.

Rules:
- Use simple English.
- Use headings.
- Use bullet points.
- Highlight important concepts.
- Keep it concise.

Study Material:

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
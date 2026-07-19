import os
import json
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def start_viva(document_text):
    """
    Starts the viva by asking the first question.
    """

    prompt = f"""
You are an experienced engineering professor.

Conduct a viva based ONLY on the following study material.

Rules:
- Ask ONLY ONE question.
- Don't give the answer.
- Wait for the student's reply.
- Keep the question concise.
- Start with an easy question.

Study Material:
{document_text}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "You are a professional viva examiner."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.6,
    )

    return response.choices[0].message.content


def continue_viva(document_text, history, student_answer):
    """
    Continues the viva after the student answers.
    Returns structured JSON containing score,
    feedback and the next question.
    """

    prompt = f"""
Study Material:
{document_text}

Conversation so far:
{history}

Student Answer:
{student_answer}

You are an engineering viva examiner.

Evaluate the student's answer.

Respond ONLY in this exact JSON format.

{{
    "score": 8,
    "feedback": "Short feedback here.",
    "next_question": "Next viva question here."
}}

Rules:

- Score must be between 0 and 10.
- feedback should be 1-3 short sentences.
- Ask ONLY ONE next question.
- Do NOT include markdown.
- Do NOT include ```json.
- Return ONLY valid JSON.
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "You are an engineering viva examiner."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.6,
    )

    content = response.choices[0].message.content.strip()

    try:
        return json.loads(content)

    except Exception:

        return {
            "score": 0,
            "feedback": content,
            "next_question": ""
        }
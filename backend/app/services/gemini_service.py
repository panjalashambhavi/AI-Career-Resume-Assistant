import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

def analyze_resume(resume_text):
    try:
        models = []

        for model in client.models.list():
            models.append(model.name)

        return {
            "summary": "Available Models",
            "ats_score": 100,
            "strengths": models,
            "weaknesses": [],
            "missing_skills": [],
            "suggestions": [],
            "interview_questions": []
        }

    except Exception as e:
        return {
            "summary": str(e),
            "ats_score": 0,
            "strengths": [],
            "weaknesses": [str(e)],
            "missing_skills": [],
            "suggestions": [],
            "interview_questions": []
        }
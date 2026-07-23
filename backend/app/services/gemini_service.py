import os
import json
import traceback
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

def analyze_resume(resume_text):
    prompt = f"""
You are an expert ATS Resume Analyzer.

Analyze the resume and return ONLY valid JSON.

Return exactly this format:

{{
  "summary":"Professional summary",
  "ats_score":85,
  "strengths":["","",""],
  "weaknesses":["","",""],
  "missing_skills":["","",""],
  "suggestions":["","",""],
  "interview_questions":["","","","",""]
}}

Resume:

{resume_text}
"""

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        text = response.text.strip()

        if text.startswith("```json"):
            text = text.replace("```json", "").replace("```", "").strip()

        return json.loads(text)

    except Exception as e:
    error = str(e)

    if "RESOURCE_EXHAUSTED" in error:
        return {
            "summary": "AI service is temporarily busy. Please try again after one minute.",
            "ats_score": 0,
            "strengths": [],
            "weaknesses": ["Gemini free quota exceeded."],
            "missing_skills": [],
            "suggestions": [],
            "interview_questions": []
        }

    return {
        "summary": error,
        "ats_score": 0,
        "strengths": [],
        "weaknesses": [error],
        "missing_skills": [],
        "suggestions": [],
        "interview_questions": []
    }
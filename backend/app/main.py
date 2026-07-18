from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os
import shutil
import traceback

from app.utils.resume_parser import extract_text
from app.services.gemini_service import analyze_resume

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Upload folder
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {
        "message": "AI Career Resume Assistant Backend is Running!"
    }


@app.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    try:
        print("\n==============================")
        print("1️⃣ Upload Request Received")

        # Save uploaded file
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        print("2️⃣ File Saved Successfully")
        print("Path:", file_path)

        # Extract text
        extracted_text = extract_text(file_path)

        print("3️⃣ Resume Parsed Successfully")
        print("Characters Extracted:", len(extracted_text))

        # Gemini Analysis
        print("4️⃣ Sending Resume to Gemini...")

        analysis = analyze_resume(extracted_text)

        print("5️⃣ Gemini Analysis Completed")

        print("==============================\n")

        return {
            "filename": file.filename,
            "message": "Resume uploaded successfully!",
            "analysis": analysis
        }

    except Exception as e:
        print("\n❌ ERROR OCCURRED")
        traceback.print_exc()

        return {
            "error": str(e)
        }
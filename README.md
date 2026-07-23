# AI Career Resume Assistant

An AI-powered Resume Analysis web application that helps job seekers evaluate and improve their resumes using Google's Gemini Large Language Model.

## Features

- Upload PDF or DOCX resumes
- AI-generated professional summary
- ATS compatibility score
- Resume strengths
- Resume weaknesses
- Missing skills analysis
- Personalized improvement suggestions
- AI-generated interview questions
- Responsive user interface
- FastAPI backend
- React + Vite frontend

---

## Tech Stack

### Frontend
- React
- Vite
- Axios
- CSS

### Backend
- FastAPI
- Python
- Google Gemini API
- pdfplumber
- python-docx

---

## Project Structure

```
AI-Career-Resume-Assistant/
│
├── backend/
│   ├── app/
│   │   ├── services/
│   │   ├── utils/
│   │   └── main.py
│   ├── uploads/
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .dockerignore
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/
├── docs/
├── report/
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/panjalashambhavi/AI-Career-Resume-Assistant.git
```

```bash
cd AI-Career-Resume-Assistant
```

---

## Backend Setup

```bash
cd backend
```

Create a virtual environment.

```bash
python -m venv venv
```

Activate it.

### Windows

```bash
venv\Scripts\activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Create a `.env` file inside the `backend` folder.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run the backend.

```bash
uvicorn app.main:app --reload
```

Backend URL:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend
```

Install packages.

```bash
npm install
```

Create a `.env` file.

```env
VITE_API_URL=http://127.0.0.1:8000
```

Run the frontend.

```bash
npm run dev
```

Frontend URL:

```
http://localhost:5173
```

---

## API Endpoint

### Upload Resume

```
POST /upload
```

Accepts:

- PDF
- DOCX

Returns:

- ATS Score
- Summary
- Strengths
- Weaknesses
- Missing Skills
- Suggestions
- Interview Questions

---

## Docker

Build the Docker image.

```bash
docker build -t ai-career-resume-assistant .
```

Run the container.

```bash
docker run -p 8000:8000 ai-career-resume-assistant
```

---

## Deployment

### Backend

Render

### Frontend

Vercel

---

## Screenshots

- Home Page
- Resume Upload
- ATS Analysis
- Strengths & Weaknesses
- Missing Skills
- Interview Questions
- PDF Report

---

## Future Enhancements

- Resume keyword optimization
- Job description matching
- Resume ranking
- Resume history
- User authentication
- Dashboard analytics

---

## Author

**Shambhavi Panjala**

B.Tech – Artificial Intelligence & Machine Learning

AICTE IBM SkillsBuild Internship Project

---

## License

This project is developed for educational purposes under the AICTE IBM SkillsBuild Generative AI Internship.
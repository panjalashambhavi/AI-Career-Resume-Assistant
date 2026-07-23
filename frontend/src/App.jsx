import { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  FaRobot,
  FaCheckCircle,
  FaExclamationTriangle,
  FaLightbulb,
  FaQuestionCircle,
  FaTools,
  FaChartBar,
  FaFileAlt,
} from "react-icons/fa";

import "./index.css";

function Card({ title, icon, children }) {
  return (
    <motion.div
      className="info-card"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <h3>
        {icon} {title}
      </h3>

      {children}
    </motion.div>
  );
}

export default function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a resume.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);

      const API_URL =
  (
    import.meta.env.VITE_API_URL ||
    "https://ai-career-resume-assistant-production.up.railway.app"
  ).replace(/\/+$/, "");

const FINAL_URL = `${API_URL}/upload`;

console.log("API_URL =", API_URL);
console.log("Final URL =", FINAL_URL);

const res = await axios.post(
  FINAL_URL,
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
);

console.log("Response =", res.data);

setAnalysis(res.data.analysis);
    } catch (err) {
      console.error(err);
      alert("Error analyzing resume.");
    } finally {
      setLoading(false);
    }
  };
  const downloadPDF = () => {
  if (!analysis) return;

  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(20);
  doc.text("AI Resume Analysis Report", 20, y);

  y += 15;

  doc.setFontSize(14);
  doc.text(`ATS Score: ${analysis.ats_score}%`, 20, y);

  y += 12;

  doc.setFontSize(16);
  doc.text("Professional Summary", 20, y);

  y += 8;

  doc.setFontSize(12);

  const summary = doc.splitTextToSize(
    analysis.summary,
    170
  );

  doc.text(summary, 20, y);

  y += summary.length * 7 + 8;

  const addSection = (title, items) => {
    doc.setFontSize(15);
    doc.text(title, 20, y);

    y += 8;

    doc.setFontSize(12);

    items?.forEach((item) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }

      const lines = doc.splitTextToSize(
        "• " + item,
        170
      );

      doc.text(lines, 20, y);

      y += lines.length * 7;
    });

    y += 8;
  };

  addSection("Strengths", analysis.strengths);
  addSection("Weaknesses", analysis.weaknesses);
  addSection("Missing Skills", analysis.missing_skills);
  addSection("Suggestions", analysis.suggestions);
  addSection(
    "Interview Questions",
    analysis.interview_questions
  );

  doc.save("Resume_Analysis_Report.pdf");
};

  const score = analysis?.ats_score || 0;

  const scoreColor =
    score >= 80
      ? "#16a34a"
      : score >= 60
      ? "#f59e0b"
      : "#ef4444";

  return (
    <div className="container">

      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <h1>
          <FaRobot /> AI Career Resume Assistant
        </h1>

        <p>
          Upload your resume and receive an AI-powered ATS analysis.
        </p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) =>
            setSelectedFile(e.target.files[0])
          }
        />

        {selectedFile && (
          <p className="filename">
            📄 {selectedFile.name}
          </p>
        )}

        <button onClick={handleUpload}>
          🚀 Analyze Resume
        </button>

        {loading && (
          <div className="loading">
            Analyzing Resume...
          </div>
        )}

      </motion.div>

      {analysis && (
        <>

          <div className="top-dashboard">

            <motion.div
              className="dashboard-card"
              whileHover={{ scale: 1.03 }}
            >

              <h2>ATS Score</h2>

              <div className="circle">

                <CircularProgressbar
                  value={score}
                  text={`${score}%`}
                  styles={buildStyles({
                    pathColor: scoreColor,
                    textColor: "#111827",
                    trailColor: "#E5E7EB",
                  })}
                />

              </div>

              <h3>
                {score >= 80
                  ? "Excellent Resume"
                  : score >= 60
                  ? "Good Resume"
                  : "Needs Improvement"}
              </h3>

            </motion.div>
                        <motion.div
              className="dashboard-card"
              whileHover={{ scale: 1.03 }}
            >
              <h2>
                <FaChartBar /> Resume Statistics
              </h2>

              <div className="stats-grid">

                <div className="stat-box">
                  <h1>{analysis.strengths?.length || 0}</h1>
                  <p>Strengths</p>
                </div>

                <div className="stat-box">
                  <h1>{analysis.weaknesses?.length || 0}</h1>
                  <p>Weaknesses</p>
                </div>

                <div className="stat-box">
                  <h1>{analysis.missing_skills?.length || 0}</h1>
                  <p>Missing Skills</p>
                </div>

                <div className="stat-box">
                  <h1>{analysis.interview_questions?.length || 0}</h1>
                  <p>Questions</p>
                </div>

              </div>

            </motion.div>

            <motion.div
              className="dashboard-card"
              whileHover={{ scale: 1.03 }}
            >

              <h2>
                <FaFileAlt /> Resume Preview
              </h2>

              <div className="preview-box">

                <h3>{selectedFile?.name}</h3>

                <p>✅ Upload Successful</p>

                <p>
                  {(selectedFile?.size / 1024).toFixed(2)} KB
                </p>

              </div>

            </motion.div>

          </div>
          <div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "25px",
  }}
>
  <button onClick={downloadPDF}>
    📥 Download PDF Report
  </button>
</div>

          <Card title="Professional Summary" icon="📝">
            <p>{analysis.summary}</p>
          </Card>

          <div className="grid2">

            <Card
              title="Strengths"
              icon={<FaCheckCircle color="#16a34a" />}
            >
              <ul>
                {analysis.strengths?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>

            <Card
              title="Weaknesses"
              icon={<FaExclamationTriangle color="#ef4444" />}
            >
              <ul>
                {analysis.weaknesses?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>

          </div>

          <Card
            title="Missing Skills"
            icon={<FaTools />}
          >
            <div className="badges">

              {analysis.missing_skills?.map((item, index) => (
                <span
                  className="badge"
                  key={index}
                >
                  {item}
                </span>
              ))}

            </div>
          </Card>
                    <Card
            title="AI Suggestions"
            icon={<FaLightbulb />}
          >
            <ul>
              {analysis.suggestions?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card>

          <Card
            title="Interview Questions"
            icon={<FaQuestionCircle />}
          >
            <ol>
              {analysis.interview_questions?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </Card>

        </>
      )}

    </div>
  );
}
// src/components/ATSCard.jsx

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaCheckCircle } from "react-icons/fa";

function ATSCard({ score }) {
  return (
    <div className="dashboard-card ats-card">
      <h3>ATS Score</h3>

      <div className="progress-wrapper">
        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            textSize: "18px",
            pathColor: "#4f46e5",
            textColor: "#111827",
            trailColor: "#e5e7eb",
          })}
        />
      </div>

      <div className="ats-status">
        <FaCheckCircle className="success-icon" />
        <span>
          {score >= 85
            ? "Excellent Resume"
            : score >= 70
            ? "Good Resume"
            : "Needs Improvement"}
        </span>
      </div>

      <div className="score-bars">
        <div className="score-item">
          <span>Keywords</span>
          <progress value="90" max="100"></progress>
        </div>

        <div className="score-item">
          <span>Formatting</span>
          <progress value="80" max="100"></progress>
        </div>

        <div className="score-item">
          <span>Skills</span>
          <progress value="88" max="100"></progress>
        </div>

        <div className="score-item">
          <span>Experience</span>
          <progress value="82" max="100"></progress>
        </div>
      </div>
    </div>
  );
}

export default ATSCard;
// src/components/SummaryCard.jsx

import { FaFileAlt } from "react-icons/fa";

function SummaryCard({ summary }) {
  return (
    <div className="dashboard-card summary-card">
      <div className="card-header">
        <FaFileAlt className="card-icon" />
        <h3>Professional Summary</h3>
      </div>

      <p>{summary}</p>
    </div>
  );
}

export default SummaryCard;
import { useState } from "react";
import { FaCloudUploadAlt, FaFilePdf, FaFileWord } from "react-icons/fa";
import "../styles/upload.css";

export default function UploadBox({ onAnalyze, loading = false }) {
  const [file, setFile] = useState(null);

  const handleAnalyze = () => {
    if (!file) {
      alert("Please choose a PDF or DOCX resume.");
      return;
    }
    onAnalyze(file);
  };

  return (
    <section className="upload-section" id="upload">
      <div className="upload-card">
        <FaCloudUploadAlt className="upload-main-icon" />

        <h2>Upload Your Resume</h2>
        <p>Supported formats: PDF (.pdf) and Word (.docx)</p>

        <label className="upload-dropzone">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <div className="dropzone-content">
            <FaCloudUploadAlt />
            <h3>Drag & Drop or Click to Browse</h3>
            <span>Select your resume to begin AI analysis</span>
          </div>
        </label>

        {file && (
          <div className="selected-file">
            {file.name.endsWith(".pdf") ? (
              <FaFilePdf className="file-icon pdf" />
            ) : (
              <FaFileWord className="file-icon doc" />
            )}

            <div className="file-info">
              <strong>{file.name}</strong>
              <small>Ready for analysis</small>
            </div>
          </div>
        )}

        <button
          className="analyze-btn"
          onClick={handleAnalyze}
          disabled={loading}
        >
          {loading ? "Analyzing Resume..." : "Analyze Resume"}
        </button>
      </div>
    </section>
  );
}

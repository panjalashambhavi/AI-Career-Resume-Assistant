import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="about">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>AI Resume Analyzer</h2>
          <p>
            Build stronger resumes with AI-powered ATS analysis, resume
            improvement suggestions, missing skills detection, and interview
            preparation.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#upload">Upload Resume</a>
          <a href="#results">Results</a>
        </div>

        <div className="footer-contact">
          <h3>Connect</h3>

          <a href="mailto:your@email.com">
            <FaEnvelope /> Email
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {year} AI Resume Analyzer • Built with{" "}
          <FaHeart className="heart" /> React + FastAPI + Gemini AI
        </p>
      </div>
    </footer>
  );
}

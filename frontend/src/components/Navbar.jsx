import { FaRobot } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaRobot />
        <span>AI Resume Analyzer</span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#upload">Upload</a></li>
        <li><a href="#results">Results</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

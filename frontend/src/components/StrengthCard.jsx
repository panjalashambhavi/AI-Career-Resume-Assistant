import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import "../styles/dashboard.css";

export default function StrengthCard({ strengths = [] }) {
  return (
    <motion.div
      className="info-card"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>
        <FaCheckCircle />
        Resume Strengths
      </h3>

      {strengths.length > 0 ? (
        <ul className="strength-list">
          {strengths.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No strengths available.</p>
      )}
    </motion.div>
  );
}

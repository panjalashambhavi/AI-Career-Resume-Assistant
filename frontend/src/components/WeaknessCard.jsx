import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";
import "./dashboard.css";

export default function WeaknessCard({ weaknesses = [] }) {
  return (
    <motion.div
      className="info-card"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>
        <FaExclamationTriangle />
        Areas for Improvement
      </h3>

      {weaknesses.length > 0 ? (
        <ul className="weakness-list">
          {weaknesses.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No weaknesses identified.</p>
      )}
    </motion.div>
  );
}

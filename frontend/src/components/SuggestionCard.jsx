import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";
import "../styles/dashboard.css";

export default function SuggestionCard({ suggestions = [] }) {
  return (
    <motion.div
      className="info-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>
        <FaLightbulb />
        AI Suggestions
      </h3>

      {suggestions.length > 0 ? (
        <ul className="suggestion-list">
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      ) : (
        <p>No suggestions available.</p>
      )}
    </motion.div>
  );
}

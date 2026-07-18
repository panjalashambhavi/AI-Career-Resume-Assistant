import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";
import "../styles/dashboard.css";
export default function InterviewCard({ questions = [] }) {
  return (
    <motion.div
      className="info-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>
        <FaQuestionCircle />
        Interview Questions
      </h3>

      {questions.length > 0 ? (
        <ol className="interview-list">
          {questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ol>
      ) : (
        <p>No interview questions available.</p>
      )}
    </motion.div>
  );
}

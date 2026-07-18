import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import "../styles/dashboard.css";

export default function SkillsCard({ skills = [] }) {
  return (
    <motion.div
      className="info-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>
        <FaTools />
        Missing Skills
      </h3>

      {skills.length > 0 ? (
        <div className="badges">
          {skills.map((skill, index) => (
            <span key={index} className="badge">
              {skill}
            </span>
          ))}
        </div>
      ) : (
        <p>No missing skills identified.</p>
      )}
    </motion.div>
  );
}

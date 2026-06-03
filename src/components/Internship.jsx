import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';
import './Internship.css';

const Internship = () => {
  return (
    <section id="internship" className="internship-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Internship
        </motion.h2>

        <motion.div
          className="internship-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="internship-top">
            <div className="internship-icon">
              <FiBriefcase />
            </div>
            <div className="internship-org">
              <h3 className="internship-title">
                SRI SRI RURAL TALENT INNOVATION CENTRE (SSRTIC)
              </h3>
              <div className="internship-meta">
                <span className="meta-item">
                  <FiCalendar /> December 2025 – May 2026
                </span>
                <span className="meta-item">
                  <FiMapPin /> Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>

          <div className="internship-divider" />

          <p className="internship-description">
            Completed internship training in <strong>Java</strong>, <strong>SQL</strong>, and{' '}
            <strong>Web Technologies</strong>. Worked on a real-world{' '}
            <strong>Supply Chain Optimization System</strong> project and gained practical 
            experience in software development, database management, problem-solving, and 
            team collaboration.
          </p>

          <div className="internship-skills">
            <span className="internship-skill">Java</span>
            <span className="internship-skill">SQL</span>
            <span className="internship-skill">Web Technologies</span>
            <span className="internship-skill">Database Management</span>
            <span className="internship-skill">Problem Solving</span>
            <span className="internship-skill">Team Collaboration</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internship;

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiUsers } from 'react-icons/fi';
import './About.css';

const highlights = [
  { icon: <FiCode />, label: 'Java', desc: 'Core & Advanced' },
  { icon: <FiDatabase />, label: 'SQL & MySQL', desc: 'Database Management' },
  { icon: <FiLayout />, label: 'Web Tech', desc: 'HTML, CSS, JS' },
  { icon: <FiUsers />, label: 'Full Stack', desc: 'End-to-end Development' },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="about-subtitle">
              Computer Science & Engineering Student
            </h3>
            <p className="about-text">
              I am a passionate Computer Science and Engineering student with strong 
              knowledge in <strong>Java</strong>, <strong>SQL</strong>, <strong>HTML</strong>, 
              <strong> CSS</strong>, <strong>JavaScript</strong>, <strong>MySQL</strong>, 
              <strong> Git</strong>, and <strong>GitHub</strong>.
            </p>
            <p className="about-text">
              I am deeply interested in <strong>Full Stack Development</strong> and 
              <strong> Software Engineering</strong>, constantly exploring new technologies 
              to build efficient and scalable solutions. My goal is to leverage my technical 
              skills to create impactful software that solves real-world challenges.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1</span>
                <span className="stat-label">Internship</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="highlight-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <div>
                  <h4 className="highlight-label">{item.label}</h4>
                  <p className="highlight-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

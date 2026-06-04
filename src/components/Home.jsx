import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const handleDownloadResume = () => {
  window.open("/dhanalakshmi_resumes_single_page.pdf", "_blank");
  };

  return (
    <section id="home" className="home-section">
      <div className="home-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container home-container">
        <div className="home-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="home-greeting">Hello, I'm</span>
          </motion.div>

          <motion.h1
            className="home-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Dhanalakshmi A
          </motion.h1>

          <motion.div
            className="home-role-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="home-role">Java Full Stack Developer</span>
            <span className="home-role-separator">|</span>
            <span className="home-role">Software Developer</span>
          </motion.div>

          <motion.p
            className="home-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Passionate about building scalable web applications and solving real-world problems
            through clean, efficient code. Specializing in Java Full Stack Development with
            expertise in modern web technologies.
          </motion.p>

          <motion.div
            className="home-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="btn btn-primary" onClick={handleDownloadResume}>
              <FiDownload /> Download Resume
            </button>
            <a href="#projects" className="btn btn-outline">
              View Projects <FiArrowRight />
            </a>
          </motion.div>

          <motion.div
            className="home-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="https://github.com/Dhanalakshmi142005"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dhanalakshmi-arivazhagan-a820503a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="home-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="profile-ring">
            <div className="profile-placeholder">
              <span className="profile-initials">DA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

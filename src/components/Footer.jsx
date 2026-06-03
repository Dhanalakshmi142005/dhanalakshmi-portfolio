import React from 'react';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">Dhanalakshmi A</span>
            <p className="footer-tagline">
              Java Full Stack Developer | Software Developer
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a
              href="https://github.com/Dhanalakshmi142005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dhanalakshmi-arivazhagan-a820503a2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Dhanalakshmi A. Made with{' '}
            <FiHeart className="footer-heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

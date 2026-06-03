import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import './Certifications.css';

const certifications = [
  {
    title: 'Application Developer - Web & Mobile',
    issuer: 'NSDC Certified | NASSCOM',
    description:
      'Professional certification in application development for web and mobile platforms, covering full development lifecycle and industry best practices.',
    gradient: 'var(--gradient-1)',
  },
  {
    title: 'Java Full Stack Development Certification',
    issuer: 'SSRTIC',
    description:
      'Comprehensive certification in Java Full Stack Development covering Core Java, Advanced Java, SQL, Web Technologies, and real-world project implementation.',
    gradient: 'var(--gradient-2)',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="cert-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -6 }}
            >
              <div className="cert-header">
                <div className="cert-badge" style={{ background: cert.gradient }}>
                  <FiAward />
                </div>
                <div className="cert-ribbon" style={{ background: cert.gradient }}>
                  Certified
                </div>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-description">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaJava } from 'react-icons/fa';
import { SiMysql, SiHtml5, SiCss, SiJavascript, SiPython, SiGit } from 'react-icons/si';
import './Projects.css';

const projects = [
  {
    title: 'Supply Chain Optimization System',
    description:
      'Developed a Java-based console application using Object-Oriented Programming principles and modular architecture. Implemented Admin and User authentication and built modules for Product Management, Supplier Management, Inventory Tracking, Order Processing, Warehouse Management, Transportation Management, and Account Management. Integrated MySQL database for persistent data storage and used Git/GitHub for version control.',
    technologies: ['Java', 'MySQL', 'JDBC', 'Git', 'GitHub'],
    icons: [<FaJava />, <SiMysql />, <FaJava />, <SiGit />, <FiGithub />],
    gradient: 'var(--gradient-1)',
  },
  {
    title: 'Job Portal Web Application',
    description:
      'Developed a web-based job portal that connects job seekers and employers. Implemented job posting, job search, resume upload, user registration, login authentication, and application tracking functionalities. Designed a responsive user interface and optimized user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Flask Python', 'MySQL'],
    icons: [<SiHtml5 />, <SiCss />, <SiJavascript />, <SiPython />, <SiMysql />],
    gradient: 'var(--gradient-2)',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="project-header">
                <div className="project-number" style={{ background: project.gradient }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={tech} className="tech-badge">
                    <span className="tech-icon">{project.icons[i]}</span>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

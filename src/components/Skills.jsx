import React from 'react';
import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';
import {
  SiMysql, SiHtml5, SiCss, SiJavascript, SiGit, SiGithub, SiSpringboot
} from 'react-icons/si';
import { BiData } from 'react-icons/bi';
import './Skills.css';

const skills = [
  { name: 'Java', icon: <FaJava />, color: '#007396' },
  { name: 'SQL', icon: <BiData />, color: '#CC2927' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'HTML', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'CSS', icon: <SiCss />, color: '#1572B6' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'Git', icon: <SiGit />, color: '#F05032' },
  { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
  { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
  { name: 'RDBMS', icon: <BiData />, color: '#336791' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div
                className="skill-icon-wrapper"
                style={{ background: `${skill.color}15`, color: skill.color }}
              >
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBook, FiAward, FiTarget, FiCode, FiShield, FiCpu } from 'react-icons/fi';
import './About.css';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master of Internet and Multimedia Engineering",
      institution: "University of Genova",
      description: "Focusing on 5G Core Network Security, Penetration Testing, and Machine Learning based security solutions",

    },
    {
      degree: "Bachelor of Electrical and Electronic Engineering",
      institution: "University of Katip Celebi",
      description: "Radar System, Power Electronics, PLC",
    }
  ];

  const interests = [
    {
      icon: FiShield,
      title: "Penetration Testing",
      description: "Ethical hacking and vulnerability assessment of networks and applications"
    },
    {
      icon: FiCpu,
      title: "Machine Learning",
      description: "AI/ML applications in cybersecurity and network analysis"
    },
    {
      icon: FiCode,
      title: "IoT Security",
      description: "Securing connected devices and embedded systems"
    },
    {
      icon: FiTarget,
      title: "5G Security",
      description: "Next-generation network security and core network protection"
    }
  ];

  const certifications = [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      year: "2023",
      badge: "https://images.credly.com/size/680x680/images/74790a75-8451-4aeb-a052-9543b87dcec1/image.png"
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      year: "2023",
      badge: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
    },
    {
      name: "AWS Certified Security - Specialty",
      issuer: "Amazon Web Services",
      year: "2023",
      badge: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
    }
  ];

  return (
    <div className="about" ref={containerRef}>
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Me
          </motion.h1>
          
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Passionate about cybersecurity and building secure, scalable solutions
          </motion.p>
        </div>
      </motion.section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            {/* Personal Story */}
            <motion.div
              className="about-story"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h2>My Story</h2>
              <p>
                I'm a cybersecurity-focused engineer with a deep passion for securing the digital 
                infrastructure that powers our modern world. My journey began with a fascination 
                for how networks communicate and evolved into a commitment to protecting them.
              </p>
              <p>
                Currently pursuing my Master's degree in Cybersecurity, I'm working on cutting-edge 
                research in 5G Core Network Security. My thesis focuses on penetration testing 
                methodologies for next-generation telecommunications infrastructure, combining 
                traditional security practices with emerging technologies.
              </p>
              <p>
                When I'm not diving into security research or coding, you'll find me exploring 
                new technologies, contributing to open-source projects, or sharing knowledge 
                with the cybersecurity community.
              </p>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              className="quick-facts"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h3>Quick Facts</h3>
              <div className="facts-grid">
                <div className="fact-item">
                  <span className="fact-number">3+</span>
                  <span className="fact-label">Years Experience</span>
                </div>
                <div className="fact-item">
                  <span className="fact-number">15+</span>
                  <span className="fact-label">Projects Completed</span>
                </div>
                <div className="fact-item">
                  <span className="fact-number">5+</span>
                  <span className="fact-label">Certifications</span>
                </div>
                <div className="fact-item">
                  <span className="fact-number">100%</span>
                  <span className="fact-label">Client Satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <FiBook className="section-icon" />
            Educational Background
          </motion.h2>
          
          <div className="education-timeline">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-item"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
              >
                <div className="education-content">
                  <div className="education-header">
                    <h3>{edu.degree}</h3>
                    <span className="education-year">{edu.year}</span>
                  </div>
                  <h4 className="institution">{edu.institution}</h4>
                  <p className="description">{edu.description}</p>
                  <div className="gpa">
                    <FiAward />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <FiTarget className="section-icon" />
            Areas of Interest
          </motion.h2>
          
          <div className="interests-grid">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={index}
                  className="interest-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="interest-icon">
                    <Icon />
                  </div>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <FiAward className="section-icon" />
            Certifications & Badges
          </motion.h2>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="certification-badge">
                  <img src={cert.badge} alt={cert.name} />
                </div>
                <div className="certification-info">
                  <h3>{cert.name}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="year">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 
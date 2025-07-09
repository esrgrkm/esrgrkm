import React, { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const socialLinks = [
    { icon: FiGithub, url: "https://github.com/esrgrkm", label: "GitHub" },
    { icon: FiLinkedin, url: "https://www.linkedin.com/in/esrgrkm/", label: "LinkedIn" },
    { icon: FiMail, url: "esrgrkm@gmail.com", label: "Email" },
  ];

  const skills = [
    "Cybersecurity", "5G Networks", "Penetration Testing", "Machine Learning",
    "IoT Security", "Network Security", "Python", "JavaScript", "React",
    "Node.js", "Docker", "Kubernetes", "AWS", "Linux", "Wireshark", "MikroC", "SQL", 
    "Cisco Packet Tracer", "MATLAB", "Simulink", "Proteus","MPLAB", "CST", "PVSOL","PLC","Scada"
  ];

  return (
    <div className="home" ref={containerRef}>
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        style={{ y, opacity }}
      >
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="badge-text">🚀 Available for opportunities</span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi, I'm <span className="text-gradient">Görkem Eser</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Cybersecurity-focused Engineer | 5G Researcher | Electronics Engineer
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Passionate about securing the future of telecommunications and building robust, 
              scalable applications. Currently working on cutting-edge 5G Core penetration testing 
              research for my master's thesis. I had a PLC and Power Electronics based work experience. 
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/projects" className="btn btn-primary">
                View My Work
                <FiArrowRight />
              </Link>
              <a href="/path-to-your-cv.pdf" className="btn btn-secondary" download>
                <FiDownload />
                Download CV
              </a>
            </motion.div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <social.icon />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="floating-card">
              <div className="card-content">
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-buttons">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span className="terminal-title">gorkemeser@portfolio:~</span>
                  </div>
                  <div className="terminal-body">
                    <div className="terminal-line">
                      <span className="prompt">$</span>
                      <span className="command">whoami</span>
                    </div>
                    <div className="terminal-line">
                      <span className="output">Cybersecurity Engineer</span>
                    </div>
                    <div className="terminal-line">
                      <span className="prompt">$</span>
                      <span className="command">cat skills.txt</span>
                    </div>
                    <div className="terminal-line">
                      <span className="output">5G | Security | ML | IoT | React</span>
                    </div>
                    <div className="terminal-line">
                      <span className="prompt">$</span>
                      <span className="command typing">echo "Let's build something amazing!"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="skills-section"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.div
            className="skills-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to collaborate?</h2>
            <p>Let's discuss your next project or research opportunity.</p>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 
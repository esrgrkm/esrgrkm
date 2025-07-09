import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "5G Core Pentest",
      description: "Master's thesis project focusing on penetration testing methodologies for 5G Core networks. Developing automated security assessment tools for next-generation telecommunications infrastructure.",
      technologies: ["Python", "5G", "Security", "Networking", "Docker"],
      category: "research",
      github: "https://github.com/yourusername/5g-pentest",
      demo: null,
      image: "/images/5g-project.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Smart Mirror",
      description: "An IoT-powered smart mirror with facial recognition, weather display, and voice commands. Built with Raspberry Pi and custom Android application.",
      technologies: ["Python", "Android", "IoT", "OpenCV", "Raspberry Pi"],
      category: "iot",
      github: "https://github.com/yourusername/smart-mirror",
      demo: "https://smart-mirror-demo.com",
      image: "/images/smart-mirror.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Patch Antenna Design",
      description: "Design and simulation of microstrip patch antennas for 5G applications. Includes optimization for different frequency bands and radiation patterns.",
      technologies: ["HFSS", "Antenna Design", "5G", "Electromagnetics"],
      category: "hardware",
      github: null,
      demo: null,
      image: "/images/antenna-design.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Network Security Monitor",
      description: "Real-time network traffic analysis tool with intrusion detection capabilities. Monitors network packets and alerts on suspicious activities.",
      technologies: ["Python", "Wireshark", "Machine Learning", "Security"],
      category: "security",
      github: "https://github.com/yourusername/network-monitor",
      demo: null,
      image: "/images/network-monitor.jpg",
      featured: false
    },
    {
      id: 5,
      title: "IoT Device Security Scanner",
      description: "Automated vulnerability scanner for IoT devices. Identifies common security weaknesses and provides remediation recommendations.",
      technologies: ["Python", "IoT", "Security", "Automation"],
      category: "security",
      github: "https://github.com/yourusername/iot-scanner",
      demo: "https://iot-scanner-demo.com",
      image: "/images/iot-scanner.jpg",
      featured: false
    },
    {
      id: 6,
      title: "React Portfolio Website",
      description: "Modern portfolio website built with React and Framer Motion. Features dark/light mode, smooth animations, and responsive design.",
      technologies: ["React", "JavaScript", "CSS", "Framer Motion"],
      category: "web",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://your-portfolio.com",
      image: "/images/portfolio.jpg",
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'research', label: 'Research' },
    { id: 'security', label: 'Security' },
    { id: 'iot', label: 'IoT' },
    { id: 'web', label: 'Web Development' },
    { id: 'hardware', label: 'Hardware' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects" ref={containerRef}>
      {/* Hero Section */}
      <motion.section 
        className="projects-hero"
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
            My Projects
          </motion.h1>
          
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A collection of my work in cybersecurity, IoT, and software development
          </motion.p>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <motion.div
            className="filter-container"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="filter-header">
              <FiFilter />
              <span>Filter by category:</span>
            </div>
            <div className="filter-buttons">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="container">
          <motion.div
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  {project.featured && (
                    <div className="featured-badge">
                      <span>Featured</span>
                    </div>
                  )}
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FiGithub />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FiExternalLink />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              className="no-projects"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <p>No projects found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Interested in collaborating?</h2>
            <p>Let's work together on your next project or research opportunity.</p>
            <a href="/contact" className="btn btn-primary">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 
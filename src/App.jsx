import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Context
import { ThemeContext } from './context/ThemeContext';

// Styles
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="loading-content"
        >
          <div className="loading-spinner"></div>
          <h2>Loading Portfolio...</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className="App">
          <Helmet>
            <title>Your Name - Cybersecurity Engineer</title>
            <meta name="description" content="Cybersecurity-focused Engineer | 5G Researcher | React & JS Enthusiast" />
            <meta name="keywords" content="cybersecurity, 5G, networking, JavaScript, Python, penetration testing, IoT, ML" />
            <meta name="author" content="Your Name" />
            
            {/* Open Graph */}
            <meta property="og:title" content="Your Name - Cybersecurity Engineer" />
            <meta property="og:description" content="Cybersecurity-focused Engineer | 5G Researcher | React & JS Enthusiast" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://your-portfolio.com" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Your Name - Cybersecurity Engineer" />
            <meta name="twitter:description" content="Cybersecurity-focused Engineer | 5G Researcher | React & JS Enthusiast" />
          </Helmet>

          <Navbar />
          <ThemeToggle />
          
          <main className="main-content">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>

          <ScrollToTop />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App; 
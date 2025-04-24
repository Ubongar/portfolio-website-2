import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('');
  const [isScrolling, setIsScrolling] = useState(false); // New state for scrolling status

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true); // Set isScrolling to true when scrolling starts

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update current section
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setCurrentSection(section.charAt(0).toUpperCase() + section.slice(1));
          break;
        }
      }

      // Clear any existing timeout
      clearTimeout(scrollTimeout);

      // Set a timeout to change isScrolling back to false after a delay
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false); // Set isScrolling to false after scrolling stops
      }, 300); // 300ms delay, adjust as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div // Use motion.div for animation
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-5000 hidden lg:block"
      initial={{ opacity: 0 }} // Initially invisible
      animate={{ opacity: isScrolling ? 1 : 0.1 }} // Animate opacity based on scrolling
      transition={{ duration: 0.2 }} // Short duration for fade in/out
    >
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-3 shadow-lg relative z-5000">
        <div className="h-40 w-1 bg-gray-700 rounded-full relative z-5000">
          <div
            className="progress-bar"
            style={{ '--scroll-progress': `${scrollProgress}%` } as React.CSSProperties}
          />
        </div>
        <div className="mt-2 text-center text-sm font-medium text-gray-400 z-5000">
          {currentSection}
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollProgress;

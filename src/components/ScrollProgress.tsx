import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-3 shadow-lg">
        <div className="h-40 w-1 bg-gray-700 rounded-full relative">
          <div 
            className="absolute w-1 bg-indigo-600 rounded-full transition-all duration-300"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
        <div className="mt-2 text-center text-sm font-medium text-gray-400">
          {currentSection}
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress;
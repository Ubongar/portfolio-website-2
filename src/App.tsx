import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ParallaxBackground from './components/ParallaxBackground';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Always start in dark mode
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 transition-colors duration-300">
      <ParallaxBackground />
      <ScrollProgress />
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
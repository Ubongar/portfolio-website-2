import React from 'react';
import { ArrowDown } from 'lucide-react';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white animate-fadeIn">
              Hi, I'm <span className="text-indigo-600">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl mt-4 text-gray-700 dark:text-gray-300 animate-fadeIn animation-delay-200">
              Frontend Developer & UI/UX Designer
            </p>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 animate-fadeIn animation-delay-400">
              I create beautiful, responsive websites with engaging user experiences
              that help businesses achieve their goals.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start animate-fadeIn animation-delay-600">
              <Button onClick={scrollToAbout} size="lg">
                Explore My Work
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '#contact'} size="lg">
                Contact Me
              </Button>
            </div>
            
            <div className="mt-10 animate-fadeIn animation-delay-800 flex justify-center lg:justify-start">
              <SocialLinks />
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl animate-fadeIn">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating decoration elements */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg rotate-12 animate-float"></div>
            <div className="absolute -bottom-8 -right-4 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-lg -rotate-12 animate-float animation-delay-1000"></div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
          <ArrowDown className="text-gray-600 dark:text-gray-400" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
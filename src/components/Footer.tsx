import React from 'react';
import { ChevronUp } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className="text-2xl font-bold"
            >
              Portfolio<span className="text-indigo-500">.</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Trust me with the keys to your website and watch it unfold like you have never seen before.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-indigo-600 hover:bg-indigo-700 w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
            <SocialLinks />
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Archie Michael Ubong. All rights reserved.
          </p>
          
          <nav className="flex space-x-6">
            <a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
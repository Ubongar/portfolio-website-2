import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const headerClass = `fixed w-full transition-all duration-300 z-50 ${
    isScrolled
      ? 'bg-white dark:bg-gray-900 shadow-md py-3'
      : 'bg-transparent py-5'
  }`;

  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Resume', href: '#resume' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white"
        >
          Portfolio<span className="text-indigo-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {item.title}
            </a>
          ))}
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <button
            onClick={toggleMenu}
            className="ml-4 text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 w-full transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-2 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
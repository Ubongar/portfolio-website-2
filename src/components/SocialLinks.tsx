import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const SocialLinks: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/',
      icon: <Github size={20} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/',
      icon: <Linkedin size={20} />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
      icon: <Twitter size={20} />,
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: <Mail size={20} />,
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
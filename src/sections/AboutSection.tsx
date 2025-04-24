import React from 'react';
import { Award, Briefcase, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const AboutSection: React.FC = () => {
  const stats = [
    {
      icon: <Briefcase size={24} className="text-indigo-600" />,
      value: '5+',
      label: 'Years Experience',
    },
    {
      icon: <Award size={24} className="text-indigo-600" />,
      value: '20+',
      label: 'Projects Completed',
    },
    {
      icon: <Users size={24} className="text-indigo-600" />,
      value: '10+',
      label: 'Happy Clients',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about me and my background"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
              <img
                src="https://images.pexels.com/photos/5474282/pexels-photo-5474282.jpeg"
                alt="About Me"
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-indigo-600 rounded-lg z-0"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Frontend Developer & UI/UX Designer based in San Francisco, CA
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a passionate developer with a strong background in creating responsive and user-friendly web applications. 
              With over 5 years of experience in the field, I've worked with a variety of clients 
              from startups to established businesses.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              My approach combines technical expertise with creative problem-solving to deliver solutions that not only 
              meet but exceed client expectations. I'm always eager to learn new technologies and stay up-to-date with 
              industry trends to ensure I deliver the best possible results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center transform transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button onClick={() => window.location.href = '#resume'}>
                View Resume
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '#contact'}>
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
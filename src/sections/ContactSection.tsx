import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-indigo-600" />,
      title: 'Location',
      content: 'San Francisco, CA',
    },
    {
      icon: <Mail size={24} className="text-indigo-600" />,
      title: 'Email',
      content: 'your.email@example.com',
    },
    {
      icon: <Phone size={24} className="text-indigo-600" />,
      title: 'Phone',
      content: '+1 (123) 456-7890',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Contact Me"
          subtitle="Let's discuss your project or job opportunity"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm currently available for freelance work and full-time positions.
              If you have a project that needs some creative work, or if you're looking 
              to hire a developer, let's talk!
            </p>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <SocialLinks />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
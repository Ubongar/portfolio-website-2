import React from 'react';
import { Download } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';
import { TimelineEvent } from '../components/TimelineItem';
import Button from '../components/Button';

const ResumeSection: React.FC = () => {
  const experienceEvents: TimelineEvent[] = [
    {
      id: 1,
      date: '2021 - Present',
      title: 'Senior Frontend Developer',
      subtitle: 'Tech Innovations Inc.',
      description: 'Lead the development of responsive web applications using React, TypeScript, and Redux. Collaborated with designers and backend teams to implement new features and optimize performance.',
      type: 'experience',
    },
    {
      id: 2,
      date: '2019 - 2021',
      title: 'Frontend Developer',
      subtitle: 'Digital Solutions Ltd.',
      description: 'Developed and maintained client websites using JavaScript, HTML5, and CSS3. Implemented responsive designs and integrated with RESTful APIs.',
      type: 'experience',
    },
    {
      id: 3,
      date: '2017 - 2019',
      title: 'Web Developer',
      subtitle: 'Creative Web Agency',
      description: 'Built responsive websites and implemented UI designs for various clients. Worked on both frontend and backend technologies.',
      type: 'experience',
    },
  ];

  const educationEvents: TimelineEvent[] = [
    {
      id: 4,
      date: '2015 - 2017',
      title: 'Master of Computer Science',
      subtitle: 'University of Technology',
      description: 'Specialized in web development and user interface design. Graduated with honors and completed a thesis on responsive web application architecture.',
      type: 'education',
    },
    {
      id: 5,
      date: '2011 - 2015',
      title: 'Bachelor of Computer Science',
      subtitle: 'State University',
      description: 'Studied computer programming, algorithms, and data structures. Participated in various coding competitions and hackathons.',
      type: 'education',
    },
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="My Resume"
          subtitle="A summary of my experience and education"
        />

        <div className="flex justify-center mb-12">
          <Button
            className="flex items-center"
            onClick={() => {
              // In a real site, this would download a PDF resume
              alert('Resume download functionality would be implemented here');
            }}
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 mr-3">
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Work Experience
            </h3>

            <div className="pl-6">
              {experienceEvents.map((event, index) => (
                <TimelineItem
                  key={event.id}
                  event={event}
                  isLast={index === experienceEvents.length - 1}
                />
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 mr-3">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
              </svg>
              Education
            </h3>

            <div className="pl-6">
              {educationEvents.map((event, index) => (
                <TimelineItem
                  key={event.id}
                  event={event}
                  isLast={index === educationEvents.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 mr-3">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
            </svg>
            Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Frontend Web Developer', issuer: 'Web Development Academy', year: '2020' },
              { name: 'React.js Certification', issuer: 'React Training', year: '2019' },
              { name: 'UI/UX Design Principles', issuer: 'Design Institute', year: '2018' },
            ].map((cert, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-transform duration-300 hover:-translate-y-1">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{cert.name}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProgressBar from '../components/ProgressBar';
import SkillTag from '../components/SkillTag';

type SkillCategory = 'frontend' | 'backend' | 'design' | 'other';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');
  
  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'other', label: 'Other' },
  ];
  
  const skillsData = {
    frontend: [
      { name: 'HTML5/CSS3', percentage: 95 },
      { name: 'JavaScript', percentage: 90 },
      { name: 'React', percentage: 88 },
      { name: 'TypeScript', percentage: 85 },
      { name: 'Vue.js', percentage: 80 },
      { name: 'Tailwind CSS', percentage: 92 },
    ],
    backend: [
      { name: 'Node.js', percentage: 85 },
      { name: 'Express', percentage: 82 },
      { name: 'MongoDB', percentage: 78 },
      { name: 'SQL', percentage: 75 },
      { name: 'Firebase', percentage: 80 },
      { name: 'RESTful APIs', percentage: 88 },
    ],
    design: [
      { name: 'Figma', percentage: 90 },
      { name: 'Adobe XD', percentage: 85 },
      { name: 'Photoshop', percentage: 75 },
      { name: 'UI/UX Design', percentage: 88 },
      { name: 'Wireframing', percentage: 92 },
      { name: 'Prototyping', percentage: 85 },
    ],
    other: [
      { name: 'Git/GitHub', percentage: 90 },
      { name: 'Webpack', percentage: 82 },
      { name: 'Jest', percentage: 78 },
      { name: 'CI/CD', percentage: 75 },
      { name: 'Agile/Scrum', percentage: 85 },
      { name: 'SEO', percentage: 80 },
    ],
  };
  
  const otherSkills = [
    { name: 'React Native', level: 'intermediate' as const },
    { name: 'Redux', level: 'advanced' as const },
    { name: 'Next.js', level: 'intermediate' as const },
    { name: 'GraphQL', level: 'beginner' as const },
    { name: 'Gatsby', level: 'intermediate' as const },
    { name: 'SASS', level: 'advanced' as const },
    { name: 'Docker', level: 'beginner' as const },
    { name: 'AWS', level: 'beginner' as const },
    { name: 'Storybook', level: 'intermediate' as const },
    { name: 'Vite', level: 'intermediate' as const },
    { name: 'Material UI', level: 'advanced' as const },
    { name: 'Bootstrap', level: 'expert' as const },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="My Skills"
          subtitle="Here are some of my skills and technologies I work with"
        />
        
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-full p-1 inline-flex">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as SkillCategory)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 md:p-8 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {skillsData[activeCategory].map((skill, index) => (
              <ProgressBar
                key={index}
                label={skill.name}
                percentage={skill.percentage}
                color={
                  skill.percentage >= 90
                    ? 'bg-indigo-600'
                    : skill.percentage >= 80
                    ? 'bg-blue-600'
                    : skill.percentage >= 70
                    ? 'bg-purple-600'
                    : 'bg-pink-600'
                }
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Other Technologies & Tools
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, index) => (
              <SkillTag key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
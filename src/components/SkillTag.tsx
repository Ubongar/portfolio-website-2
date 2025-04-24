import React from 'react';

interface SkillTagProps {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

const SkillTag: React.FC<SkillTagProps> = ({ name, level = 'intermediate' }) => {
  const getLevelColor = () => {
    switch (level) {
      case 'beginner':
        return 'border-blue-400 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20';
      case 'intermediate':
        return 'border-indigo-400 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20';
      case 'advanced':
        return 'border-purple-400 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20';
      case 'expert':
        return 'border-pink-400 text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20';
      default:
        return 'border-gray-400 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800';
    }
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor()} transition-all duration-200 hover:scale-105`}>
      {name}
    </span>
  );
};

export default SkillTag;
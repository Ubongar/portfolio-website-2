import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className = '',
  alignment = 'center',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[alignment]} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-indigo-600 mt-4 ${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;
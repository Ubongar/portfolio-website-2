import React from 'react';

export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'experience';
}

interface TimelineItemProps {
  event: TimelineEvent;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, isLast }) => {
  const itemTypeColors = {
    education: 'bg-blue-600',
    experience: 'bg-indigo-600',
  };

  return (
    <div className="flex relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute h-full left-6 border-l-2 border-dashed border-gray-300 dark:border-gray-700"></div>
      )}

      {/* Timeline dot */}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${itemTypeColors[event.type]} text-white shrink-0`}>
        {event.type === 'education' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="ml-6 mb-10">
        <span className="text-sm text-gray-500 dark:text-gray-400">{event.date}</span>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">{event.title}</h3>
        <h4 className="text-md text-indigo-600 dark:text-indigo-400 font-medium mb-2">{event.subtitle}</h4>
        <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
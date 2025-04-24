import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {project.featured && (
          <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-md">
            Featured
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <Button 
            variant="primary" 
            size="sm" 
            className="flex items-center"
            onClick={() => window.open(project.demoUrl, '_blank')}
          >
            <ExternalLink size={16} className="mr-1" />
            Demo
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center"
            onClick={() => window.open(project.repoUrl, '_blank')}
          >
            <Github size={16} className="mr-1" />
            Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
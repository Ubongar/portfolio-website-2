import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../components/ProjectCard';
import Button from '../components/Button';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce platform with product filtering, shopping cart, and secure checkout functionality.',
      image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard that visualizes social media metrics and user engagement data.',
      image: 'https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg',
      tags: ['Vue.js', 'TypeScript', 'Chart.js', 'Firebase'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A productivity app with kanban board functionality, task filtering, and team collaboration features.',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg',
      tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 4,
      title: 'Weather Application',
      description: 'A weather app that provides real-time forecasts, hourly predictions, and location-based weather data.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      tags: ['JavaScript', 'API', 'CSS3', 'HTML5'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth scrolling, animations, and contact form functionality.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      id: 6,
      title: 'Music Streaming Service',
      description: 'A music app with playlist creation, search functionality, and audio player controls.',
      image: 'https://images.pexels.com/photos/6320/smartphone-vintage-technology-music.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      id: 7,
      title: 'Recipe Finder App',
      description: 'A recipe application where users can search, save, and share cooking recipes.',
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg',
      tags: ['Vue.js', 'Firebase', 'Vuex'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      id: 8,
      title: 'Real Estate Listings',
      description: 'A property listings website with search, filtering, and virtual tour capabilities.',
      image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
    {
      id: 9,
      title: 'Budget Tracker',
      description: 'A financial app that helps users track expenses, create budgets, and visualize spending habits.',
      image: 'https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg',
      tags: ['JavaScript', 'Chart.js', 'LocalStorage'],
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
    },
  ];
  
  // Get unique tags from projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(filter));
  
  // Display limited number of projects
  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  
  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="My Projects"
          subtitle="Check out some of my recent work"
        />
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => { setFilter('all'); setVisibleProjects(6); }}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => { setFilter(tag); setVisibleProjects(6); }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === tag
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {displayedProjects.length < filteredProjects.length && (
          <div className="mt-12 text-center">
            <Button onClick={loadMoreProjects} variant="outline">
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
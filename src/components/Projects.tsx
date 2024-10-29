import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Event Registration',
    description: 'Full-stack web application for online event registration and payment processing.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Book Library',
    description: 'MERN stack application for efficient book management and search functionality.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: '#',
    demo: '#'
  },
  {
    title: 'User Interface Deception',
    description: 'Chrome extension to identify dark patterns with 85% accuracy using ML.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Machine Learning'],
    github: '#',
    demo: '#'
  },
  {
    title: 'AGRONET',
    description: 'Deep learning application for crop disease identification with 90% accuracy.',
    tech: ['Python', 'Deep Learning', 'CNN'],
    github: '#',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="text-white hover:text-purple-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href={project.demo} className="text-white hover:text-purple-400 transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
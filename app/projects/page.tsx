'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { getSortedProjects } from '@/data/projects';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const sortedProjects = getSortedProjects();
  // Flatten all categories and get unique values
  const categories = ['All', ...Array.from(new Set(sortedProjects.flatMap(p => p.categories)))];
  
  // Filter projects that include the selected category
  const filteredProjects = filter === 'All' 
    ? sortedProjects 
    : sortedProjects.filter(p => p.categories.includes(filter));

  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '5rem' }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900" style={{ marginBottom: '2rem' }}>
            Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of highlighted projects from my career. 
            Showcasing my journey as a product developer, ranging from new to old. 
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center"
          style={{ gap: '1.5rem', marginBottom: '5rem' }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '4rem' }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}


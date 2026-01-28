'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.categories.map((category, index) => (
                <span key={index} className="inline-block px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 line-clamp-2" style={{ marginTop: '1rem' }}>{project.description}</p>
        </div>
      </motion.div>
    </Link>
  );
}


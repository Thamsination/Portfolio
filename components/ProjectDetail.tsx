'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectDetailProps {
  project: Project;
  nextProject: Project;
  prevProject: Project;
}

export default function ProjectDetail({ project, nextProject, prevProject }: ProjectDetailProps) {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[60vh] bg-gray-200">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-gray-200 max-w-3xl">{project.description}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{project.details.overview}</p>
            </motion.section>

            {/* Challenges */}
            {project.details.challenges && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h2>
                <p className="text-gray-600 leading-relaxed">{project.details.challenges}</p>
              </motion.section>
            )}

            {/* Outcome */}
            {project.details.outcome && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcome</h2>
                <p className="text-gray-600 leading-relaxed">{project.details.outcome}</p>
              </motion.section>
            )}

            {/* Image Gallery */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="sticky top-24 space-y-8"
            >
              {/* Project Info */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Role</h3>
                  <p className="text-gray-900">{project.details.role}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Timeline</h3>
                  <p className="text-gray-900">{project.details.timeline}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.details.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Back Button */}
              <button
                onClick={() => router.back()}
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                ← Back to Projects
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation to Next/Previous Projects */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous Project */}
            <Link href={`/projects/${prevProject.id}`} className="group">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Previous Project</p>
                  <p className="text-lg font-semibold text-gray-900 truncate">{prevProject.title}</p>
                </div>
              </div>
            </Link>

            {/* Next Project */}
            <Link href={`/projects/${nextProject.id}`} className="group">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex-1 min-w-0 text-right">
                  <p className="text-sm text-gray-500 mb-1">Next Project</p>
                  <p className="text-lg font-semibold text-gray-900 truncate">{nextProject.title}</p>
                </div>
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


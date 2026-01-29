'use client';

import { useState } from 'react';
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

// Helper function to parse markdown-style links [text](url) and render as clickable links
function renderTextWithLinks(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // Add the link
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

// Map company names to logo file paths and website URLs
const companyLogos: Record<string, { logo: string; url: string }> = {
  'SOUNDBOKS': { logo: '/logos/soundboks.svg', url: 'https://www.soundboks.com/' },
  'Bang & Olufsen': { logo: '/logos/bang-olufsen.svg', url: 'https://www.bang-olufsen.com/' },
  'IDEO London': { logo: '/logos/ideo.svg', url: 'https://www.ideo.com/' },
  'UVISA Health': { logo: '/logos/uvisa.svg', url: 'https://www.uvisahealth.com/' },
  'Danish Design Center': { logo: '/logos/ddc.png', url: 'https://ddc.dk/' },
  'Pedral': { logo: '/logos/pedral.svg', url: 'https://www.pedral.eu/' },
};

export default function ProjectDetail({ project, nextProject, prevProject }: ProjectDetailProps) {
  const router = useRouter();
  const [visibleCaption, setVisibleCaption] = useState<string | null>(null);
  
  // Get logo info for the project's company
  const companyInfo = project.details.company ? companyLogos[project.details.company] : null;

  const handleImageClick = (key: string) => {
    // Toggle caption visibility on tap (for mobile)
    setVisibleCaption(visibleCaption === key ? null : key);
  };

  // Reusable image gallery renderer
  const renderImageGallery = (images: typeof project.details.overviewImages, sectionKey: string) => {
    if (!images || images.length === 0) return null;
    
    // Use 6-column grid to support both 2-column (default) and 3-column layouts
    const gridClass = "grid grid-cols-1 md:grid-cols-6";
    
    return (
      <div className={gridClass} style={{ gap: '1rem', marginTop: '5rem' }}>
        {images.map((image, index) => {
          const imageKey = `${sectionKey}-${index}`;
          // Determine column span: default = 6 (full row), halfWidth = 3 (2 per row), thirdWidth = 2 (3 per row)
          let spanClass = "md:col-span-6"; // Default: full width (1 image per row)
          if (image.halfWidth) {
            spanClass = "md:col-span-3"; // Half width: 2 images per row
          } else if (image.thirdWidth) {
            spanClass = "md:col-span-2"; // Third width: 3 images per row
          }
          return (
            <div 
              key={index} 
              className={`group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer ${spanClass}`}
              style={{ backgroundColor: image.bgColor || '#e5e7eb' }}
              onClick={() => handleImageClick(imageKey)}
            >
              {image.video ? (
                /* Video element */
                <video
                  src={image.video}
                  controls
                  className="w-full h-full object-cover"
                  style={{ 
                    objectFit: typeof image.fit === 'number' || image.fit === 'contain' ? 'contain' : 'cover',
                    objectPosition: image.position || 'center',
                  }}
                />
              ) : image.src ? (
                /* Image element */
                <Image
                  src={image.src}
                  alt={image.caption || `${project.title} - Image ${index + 1}`}
                  fill
                  className="group-hover:scale-105 transition-transform duration-300"
                  style={{ 
                    objectFit: typeof image.fit === 'number' || image.fit === 'contain' ? 'contain' : 'cover',
                    objectPosition: image.position || 'center',
                    transform: typeof image.fit === 'number' ? `scale(${image.fit})` : undefined,
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : null}
              {/* Caption overlay - shows on hover (desktop) or tap (mobile) */}
              {image.caption && !image.video && (
                <div 
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white p-4 pt-24 transition-opacity duration-300 ${
                    visibleCaption === imageKey 
                      ? 'opacity-100' 
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <p className="text-sm">{image.caption}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

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
              <div className="flex flex-wrap gap-2 mb-4">
                {project.categories.map((category, index) => (
                  <span key={index} className="inline-block px-3 py-1 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full">
                    {category}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-gray-200 max-w-3xl">{project.description}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '5rem' }}>
          {/* Main Content */}
          <div className="lg:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900" style={{ marginBottom: '0.75rem' }}>{project.details.overviewTitle || 'Overview'}</h2>
              <p className="text-gray-600 leading-relaxed text-base">{renderTextWithLinks(project.details.overview)}</p>
              {renderImageGallery(project.details.overviewImages, 'overview')}
            </motion.section>

            {/* Challenges */}
            {project.details.challenges && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900" style={{ marginBottom: '0.75rem' }}>{project.details.challengesTitle || 'Challenges'}</h2>
                <p className="text-gray-600 leading-relaxed text-base">{renderTextWithLinks(project.details.challenges)}</p>
                {renderImageGallery(project.details.challengesImages, 'challenges')}
              </motion.section>
            )}

            {/* Outcome */}
            {project.details.outcome && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-900" style={{ marginBottom: '0.75rem' }}>{project.details.outcomeTitle || 'Outcome'}</h2>
                <p className="text-gray-600 leading-relaxed text-base">{renderTextWithLinks(project.details.outcome)}</p>
                {renderImageGallery(project.details.outcomeImages, 'outcome')}
              </motion.section>
            )}
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
              <div className="bg-gray-50 rounded-lg" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Company Logo */}
                {companyInfo && (
                  <div>
                    <a
                      href={companyInfo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:opacity-70 transition-opacity"
                    >
                      <Image
                        src={companyInfo.logo}
                        alt={project.details.company || 'Company'}
                        width={120}
                        height={40}
                        style={{ height: '28px', width: 'auto', filter: 'grayscale(100%)' }}
                      />
                    </a>
                  </div>
                )}
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
                className="btn w-full px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
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


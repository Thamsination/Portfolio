'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const skills = [
  { category: 'Design Tools', items: ['SolidWorks', 'Rhino 3D', 'Fusion 360', 'KeyShot', 'V-Ray'] },
  { category: 'Creative Suite', items: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'After Effects'] },
  { category: 'Prototyping', items: ['3D Printing', 'CNC Machining', 'Arduino', 'Laser Cutting'] },
  { category: 'Methodologies', items: ['Design Thinking', 'User Research', 'Rapid Prototyping', 'Sustainable Design'] },
];

const experience = [
  {
    year: '2023 - Present',
    title: 'Senior Industrial Designer',
    company: 'Design Studio',
    description: 'Leading product development projects from concept to production, specializing in consumer products and sustainable design solutions.',
  },
  {
    year: '2021 - 2023',
    title: 'Product Developer',
    company: 'Innovation Lab',
    description: 'Developed innovative product concepts with focus on user experience and manufacturing feasibility.',
  },
  {
    year: '2019 - 2021',
    title: 'Junior Industrial Designer',
    company: 'Design Agency',
    description: 'Contributed to various industrial design projects, from furniture to consumer electronics.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating meaningful design solutions that improve people&apos;s lives
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden"
          >
            {/* Placeholder for profile image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Hello, I&apos;m Christian</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I&apos;m an industrial designer and product developer with a passion for creating innovative solutions 
                that balance form, function, and sustainability. With years of experience in the field, I&apos;ve had 
                the opportunity to work on diverse projects ranging from consumer products to furniture design.
              </p>
              <p>
                My design philosophy centers on understanding user needs and translating them into thoughtful, 
                well-crafted products. I believe that great design should not only look beautiful but also solve 
                real problems and be environmentally responsible.
              </p>
              <p>
                When I&apos;m not designing, you can find me exploring new materials, experimenting with prototyping 
                techniques, or staying up to date with the latest trends in sustainable manufacturing.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-gray-600 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gray-900"></div>
                <div className="text-sm font-medium text-gray-500 mb-1">{exp.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                <div className="text-gray-600 font-medium mb-3">{exp.company}</div>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}


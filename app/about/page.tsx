'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const skills = [
  { 
    category: 'CAD & Rendering', 
    items: ['SolidWorks', 'Fusion 360', 'Rhinoceros 3D', 'Grasshopper', 'OnShape', 'Creo 3', 'FreeCAD', 'KeyShot', 'Blender'] 
  },
  { 
    category: '2D Software', 
    items: ['Adobe Creative Suite', 'GIMP', 'Inkscape'] 
  },
  { 
    category: 'Physical Prototyping', 
    items: ['3D Printing', 'CNC Machining', 'Laser Cutting', 'Lathe', 'Milling', 'Band Saw'] 
  },
  { 
    category: 'Electronics', 
    items: ['Raspberry Pi', 'Arduino', 'C++', 'Electronic Prototyping'] 
  },
];

const experience = [
  {
    year: 'Feb 2024 – Present',
    title: 'Chief Product Officer',
    company: 'UVISA Health, Copenhagen',
    description: 'Ensuring development activities reach project milestones and follow required regulations (EU MDR, ISO13485, ISO 60601) for the UVISA medical device. Coordinating engineering activities across software, hardware, suppliers, and company stakeholders. Designing and developing the mechanical aspects of the medical device.',
  },
  {
    year: 'Sep 2021 – Aug 2022',
    title: 'Open-Source HW Consultant',
    company: 'Danish Design Center, Copenhagen',
    description: 'Represented the DDC in the EU project OpenNext, creating design materials and workshops for companies using open-source methodologies for hardware product development. Tasks included project management, creating design tool-sets, and workshop facilitation.',
  },
  {
    year: 'Sep 2018 – Sep 2019',
    title: 'Design Specialist',
    company: 'SOUNDBOKS, Copenhagen',
    description: 'Responsible for bringing the SOUNDBOKS 3 project to market, including industrial design of components, creating CMF/DFMA/QC documentation with suppliers, and developing UX direction bridging the physical interface with the app strategy.',
  },
  {
    year: 'Jan 2015 – Aug 2018',
    title: 'Concept Manager',
    company: 'Bang & Olufsen, Copenhagen',
    description: 'Discovering user touch-points related to design projects, ensuring offers live up to Bang & Olufsen\'s standards in design, function, and perceived quality. Created product briefs, collaborated with external designers, and led concept development. Worked on Beocreate and Beosound Halo.',
  },
];

const education = [
  {
    year: '2013 – 2015',
    degree: 'MFA, Industrial Design',
    school: 'Lund School of Industrial Design',
  },
  {
    year: '2012 – 2013',
    degree: 'Industrial Design Intensive',
    school: 'Umeå Institute of Design',
  },
  {
    year: '2009 – 2012',
    degree: 'BSc. Product Design Engineering',
    school: 'University of Skövde',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '5rem', marginBottom: '10rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden"
          >
            <Image
              src="/profile.jpg"
              alt="Christian Thams"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-gray-900" style={{ marginBottom: '2rem' }}>Hello, I&apos;m Christian</h2>
            <div className="text-gray-600 leading-relaxed" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                I’ve always been curious about how things work and come together, which first led me to 
                study Product Design Engineering at the University of Skövde. I then spent a year at the 
                Umeå Institute of Design to further explore creative disciplines, and studied at the
                Master's program of Industrial Design at Lund University School of Industrial Design.
              </p>
              <p>
                During my studies, I interned at IDEO which laid the foundation for my understanding of 
                user-centered design and strategic design thinking. My Master’s thesis with Bang & Olufsen 
                allowed me to investigate how physical interfaces can improve voice-controlled interactions. 
                Since then, I’ve contributed to projects across various industries, including consumer 
                electronics, medtech, and open-source initiatives.
              </p>
              <p>
                Most recently, I’ve been working with generative computational design and developing 
                custom FreeCAD add-ons for both personal and professional use. 
                Through it all, my motivation has stayed the same—to make things people love.
              </p>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href="/resume.pdf"
                download
                className="btn inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
              <a
                href="mailto:hello@christianthams.com"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
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
          style={{ marginBottom: '10rem' }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center" style={{ marginBottom: '4rem' }}>Skills & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem' }}>
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg"
                style={{ padding: '1.5rem' }}
              >
                <h3 className="text-lg font-semibold text-gray-900" style={{ marginBottom: '1rem' }}>{skillGroup.category}</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-gray-600 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" style={{ marginRight: '0.5rem' }}></span>
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
          style={{ marginBottom: '10rem' }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center" style={{ marginBottom: '4rem' }}>Experience</h2>
          <div className="max-w-3xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative border-l-2 border-gray-200"
                style={{ paddingLeft: '2rem', paddingBottom: '2rem' }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gray-900"></div>
                <div className="text-sm font-medium text-gray-500" style={{ marginBottom: '0.5rem' }}>{exp.year}</div>
                <h3 className="text-xl font-bold text-gray-900" style={{ marginBottom: '0.25rem' }}>{exp.title}</h3>
                <div className="text-gray-600 font-medium" style={{ marginBottom: '1rem' }}>{exp.company}</div>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center" style={{ marginBottom: '4rem' }}>Education</h2>
          <div className="max-w-3xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg"
                style={{ padding: '1.5rem' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                  </div>
                  <div className="text-sm font-medium text-gray-500" style={{ marginTop: '0.5rem' }}>{edu.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

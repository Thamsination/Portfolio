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
    items: ['SolidWorks', 'Creo', 'Fusion 360', 'Rhinoceros 3D', 'Grasshopper', 'OnShape', 'FreeCAD', 'KeyShot', 'Blender'],
  },
  {
    category: 'Computational Design',
    items: ['Generative Design', 'Evolutionary Optimisation', 'Parametric Modelling', 'FreeCAD Add-ons (Python)'],
  },
  {
    category: 'Physical Prototyping',
    items: ['3D Printing', 'CNC Machining', 'Laser Cutting', 'Lathe', 'Milling', 'Band Saw'],
  },
  {
    category: 'Manufacturing',
    items: ['Injection Moulding', 'Machined Parts', 'CMF', 'DFM/DFMA', 'QC Documentation'],
  },
  {
    category: 'Regulatory & Standards',
    items: ['EU MDR', 'ISO 13485', 'ISO 14971', 'IEC 60601', 'IEC 62304', 'IEC 62366'],
  },
  {
    category: '2D & Visualisation',
    items: ['Adobe Creative Suite', 'GIMP', 'Inkscape'],
  },
  {
    category: 'Electronics',
    items: ['Raspberry Pi', 'Arduino', 'C++', 'Electronic Prototyping'],
  },
  {
    category: 'Languages',
    items: ['Swedish (native)', 'English (native)', 'Danish (fluent)'],
  },
];

const experience = [
  {
    year: 'Feb 2024 – Jan 2026',
    title: 'Chief Product Officer',
    company: 'UVISA Health, Copenhagen',
    description: 'Led product development for UVISA\'s Class IIa medical device as sole mechanical designer — taking plastic injection-moulded housings, machined components, and PCB enclosures from concept to DFM-ready drawings under EU MDR, ISO 13485, and IEC 60601. Co-developed 50+ technical design files and a complete QMS, coordinated 4 engineering disciplines, and delivered 100 clinical-study-approved devices to Odense University Hospital.',
  },
  {
    year: 'Aug 2022 – Feb 2024',
    title: 'Independent Design Research',
    company: 'Personal Project',
    description: 'Explored circular design systems for consumer audio — investigating how broken and used headphones could be disassembled and reimagined into new products through digital design frameworks. The project developed a methodology for mapping existing component geometries and generating new design architectures around them, building on themes first explored during the Beocreate work at B&O.',
  },
  {
    year: 'Sep 2021 – Aug 2022',
    title: 'Open-Source HW Consultant',
    company: 'Danish Design Center, Copenhagen',
    description: 'Designed open-source hardware development toolkits and facilitated workshops for companies in the EU-funded OpenNext programme — adapting design methodologies to each client\'s context and surfacing actionable opportunities for hardware product strategies. Managed the DDC sub-team within a multi-partner EU project.',
  },
  {
    year: 'Jan 2020 – Sep 2021',
    title: 'Independent Product Design',
    company: 'Personal Projects',
    description: 'Explored independent product design and concept work, including the Pippi Baby Monitor — a Scandinavian-designed baby monitor concept developed at Soundhub DK, combining top-tier audio components with a design language that complements the home environment.',
  },
  {
    year: 'Sep 2018 – Sep 2019',
    title: 'Design Specialist',
    company: 'SOUNDBOKS, Copenhagen',
    description: 'Brought SOUNDBOKS 3 to high-volume consumer production as sole industrial designer — designing all plastic and structural components, producing CMF/DFMA/QC documentation for manufacturing suppliers, and developing the UX strategy bridging the physical interface to the app. The product is now used by over 100,000 customers worldwide.',
  },
  {
    year: 'Jan 2015 – Aug 2018',
    title: 'Concept Manager',
    company: 'Bang & Olufsen, Copenhagen',
    description: 'Managed concept development and product briefs across multiple B&O projects over 3.5 years — including Beocreate and Beosound Halo — coordinating external designers and manufacturers while holding every decision to B&O\'s benchmark for design quality, function, and perceived value. Originated the Beocreate concept, ran internal and external hackathons, and partnered with HifiBerry to launch globally; the work directly influenced B&O\'s subsequent Recreated and Reloved product lines.',
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
                Most recently, I’ve been developing FreeCAD add-ons that apply evolutionary
                algorithms to geometry optimisation — using computational design generation with
                performance measurement to automate the exploration of manufacturable part geometries.
                Through it all, my motivation has stayed the same—to make things people love.
              </p>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href="/Christian Thams - CV.pdf"
                download
                data-goatcounter-click="cv-download"
                data-goatcounter-title="CV Download"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4" style={{ gap: '2rem' }}>
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

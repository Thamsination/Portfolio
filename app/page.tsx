'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { getFeaturedProjects } from '@/data/projects';

const companies = [
  { name: 'Bang & Olufsen', url: 'https://www.bang-olufsen.com/', logo: '/logos/bang-olufsen.svg' },
  { name: 'SOUNDBOKS', url: 'https://www.soundboks.com/', logo: '/logos/soundboks.svg' },
  { name: 'IDEO', url: 'https://www.ideo.com/', logo: '/logos/ideo.svg' },
  { name: 'Danish Design Center', url: 'https://danskdesigncenter.dk/', logo: '/logos/ddc.png' },
  { name: 'UVISA Health', url: 'https://www.uvisahealth.com/', logo: '/logos/uvisa.svg' },
];

// Testimonials - Uncomment when ready with real quotes from colleagues/clients
// const testimonials = [
//   {
//     quote: "It was a pleasure to work with Christian.He has a good understanding of an ideas potential, a sound process that keeps theproject on track, coupled with a warm and creative spirit.",
//     name: "Torsten Valuer",
//     role: "Owner, Valuer Designers",
//   },
//   {
//     quote: "A thoughtful designer who understands how to balance user needs with technical constraints. His ability to communicate complex concepts through prototypes made collaboration seamless.",
//     name: "Collaborator",
//     role: "Bang & Olufsen",
//   },
//   {
//     quote: "Christian's approach to open-source hardware design brought fresh perspectives to our innovation initiatives. His workshop facilitation skills helped bridge the gap between makers and enterprise.",
//     name: "Project Partner",
//     role: "Danish Design Center",
//   },
// ];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 sm:pt-0">
        {/* Background Image */}
        <Image
          src="/hero-background.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Colored Overlay (Deep Indigo Example, 70% opacity) */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(1, 10, 73, 0.8)' }} />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white" style={{ marginBottom: '1.5rem' }}>
              Making things people <span style={{ color: 'rgba(249, 101, 219, 0.8)' }}>love</span>
            </h1>
            <p className="text-base text-gray-300 max-w-2xl mx-auto" style={{ marginBottom: '4rem' }}>
              <span className="sm:hidden">
                Industrial designer with 10 years of experience at B&amp;O, SOUNDBOKS &amp; UVISA Health. Turning ideas into products through sketching, CAD, and prototyping.
              </span>
              <span className="hidden sm:inline">
                <>
                  Hello! I'm Christian, an industrial designer based in Copenhagen with 10 years of experience turning ideas into real products. I take a customer-focused approach—using sketching, CAD, prototyping, and a bit of code—to make things people love.
                  <br /><br />
                  Take a look at some of my projects, and if you have any questions, feel free to send me an email. Always happy to chat!
                </>
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/projects"
                className="btn inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="btn inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-300 mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center"
            style={{ marginBottom: '6rem' }}
          >
            <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ gap: '4rem' }}
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center" style={{ marginTop: '5rem' }}>
            <Link
              href="/projects"
              className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
            >
              View All Projects
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Where I've Worked Section */}
      <section className="bg-gray-50" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{ marginBottom: '4rem' }}
          >
            <h2 className="text-3xl font-bold text-gray-900" style={{ marginBottom: '1rem' }}>Where I've Worked</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Ranging from startups to established companies, 
              I've had the privilege of working with a diverse range of companies and projects.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center"
            style={{ gap: '3rem' }}
          >
            {companies.map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center opacity-70 hover:opacity-100 transition-all hover:scale-105"
                title={company.name}
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={160}
                  height={40}
                  className="object-contain"
                  style={{ filter: 'grayscale(100%)', height: '24px', maxWidth: '160px', width: 'auto' }}
                />
              </a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
            style={{ marginTop: '3rem' }}
          >
            <Link
              href="/about"
              className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
            >
              Learn more about me
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Uncomment when ready with real quotes
      <section className="bg-white" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{ marginBottom: '4rem' }}
          >
            <h2 className="text-3xl font-bold text-gray-900" style={{ marginBottom: '1rem' }}>What People Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Feedback from colleagues and collaborators I&apos;ve had the pleasure of working with.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: '2rem' }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-lg relative"
                style={{ padding: '2rem' }}
              >
                <svg
                  className="absolute top-4 left-4 w-8 h-8 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 italic" style={{ marginBottom: '1.5rem', paddingTop: '1rem' }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="bg-gray-900 text-white" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ marginBottom: '2.5rem' }}>
              Want to make something people love?
            </h2>
            <p className="text-base text-gray-300" style={{ marginBottom: '3rem' }}>
              I&apos;d love to hear about it and discuss how we can bring your ideas to life.
            </p>
            <Link
              href="/contact"
              className="btn inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

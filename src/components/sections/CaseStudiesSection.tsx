
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    name: 'Atlaren',
    year: '2024',
    description: 'A business-focused digital platform built to present services clearly, improve online presence, and support customer engagement.',
    category: 'Custom Software',
    status: 'Live',
    image: '/projects/atlaren.png',
    link: 'https://www.atlaren.com/',
  },
  {
    name: 'Growwin Internationals',
    year: '2024',
    description: 'An international trade and business website designed to showcase global services, company credibility, and export-focused operations.',
    category: 'Business Website',
    status: 'Live',
    image: '/projects/growwin.png',
    link: 'http://growwinternationals.com/',
  },
  {
    name: 'Xrone',
    year: '2024',
    description: 'A modern technology product website built to present a digital brand, product vision, and technical capabilities.',
    category: 'Product Website',
    status: 'Live',
    image: '/projects/xrone.png',
    link: 'https://xronetech.netlify.app/',
  },
  {
    name: 'AI Voice Agent',
    year: '2025',
    description: 'An AI-powered voice agent deployed for handling inbound customer calls, inquiries, and support workflows at scale.',
    category: 'AI Voice Agent',
    status: 'Private',
    image: '/projects/ai-voice.png',
    link: null,
  },
  {
    name: 'AI Chat Agent',
    year: '2025',
    description: 'An internal and customer-facing AI chat agent built to manage structured conversations, FAQs, and business inquiries.',
    category: 'AI Chat Agent',
    status: 'Private',
    image: '/projects/ai-chat.png',
    link: null,
  }
];

export const CaseStudiesSection = () => {
  // Default to first item active
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="bg-background relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Header */}
      <div className="container-standard mb-12 text-center relative z-20">
        <span className="label-uppercase mb-4 block text-primary">Portfolio</span>
        <h2 className="mb-6 text-4xl md:text-5xl font-bold">
          What We <span className="gradient-text">Ship</span>
        </h2>
        <p className="text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
          Real projects we've built for real clients. Hover to explore.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="w-full max-w-[95%] lg:max-w-[1400px] h-[60vh] md:h-[70vh] flex flex-col md:flex-row gap-2 md:gap-4 px-4 font-sans">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={project.name}
              layout
              // Use standard React event for better reliability than Framer's onHoverStart
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              animate={{
                flex: isActive ? "8 1 0%" : "1 1 0%",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group bg-neutral-900 border border-white/5`}
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ scale: isActive ? 1.05 : 1.15 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${isActive ? 'opacity-40' : 'opacity-60 grayscale'}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-70'}`} />
              </motion.div>

              {/* Content Wrapper */}
              <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end overflow-hidden">

                {/* Always Visible: Title (Bottom or Vertical) */}
                <motion.div layout="position" className="relative z-10 w-full h-full flex flex-col justify-end">
                  {!isActive ? (
                    // Collapsed State Label
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-4 left-4 md:inset-0 md:p-4"
                    >
                      {/* Mobile: Simple text at bottom */}
                      <div className="md:hidden">
                        <h3 className="text-sm font-bold text-white/70 tracking-wider whitespace-nowrap truncate">{project.name}</h3>
                      </div>

                      {/* Desktop: Vertical Text */}
                      <div className="hidden md:flex md:items-end md:justify-center md:h-full md:pb-8">
                        <div className="writing-mode-vertical rotate-180 whitespace-nowrap">
                          <h3 className="text-xl font-bold text-white/50 tracking-wider group-hover:text-white transition-colors">
                            {project.name}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    // Expanded State Header
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="w-full"
                    >
                      <div className="inline-flex items-center gap-2 mb-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'Live' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                        <span className="text-xs font-mono text-white/60 uppercase tracking-widest">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        {project.name}
                      </h3>

                      <div className="h-px w-12 bg-white/20 mb-4 md:mb-6" />

                      <p className="text-sm md:text-lg text-white/80 leading-relaxed max-w-xl mb-6 hidden md:block">
                        {project.description}
                      </p>

                      {/* Mobile description simplified */}
                      <p className="text-sm text-white/80 leading-relaxed line-clamp-2 mb-4 md:hidden">
                        {project.description}
                      </p>

                      {/* Link Text */}
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium tracking-wide group/link"
                        >
                          View Project
                          <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-white/40 text-sm font-medium cursor-not-allowed">
                          Internal / Private
                        </span>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

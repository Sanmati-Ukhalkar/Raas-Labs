import { FadeIn } from '@/components/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    name: 'Atlaren',
    year: '2024',
    description: 'A business-focused digital platform built to present services clearly, improve online presence, and support customer engagement. The project involved custom UI/UX design, responsive development, and SEO optimization.',
    category: 'Custom Software',
    status: 'Live',
    image: '/projects/atlaren.png',
    link: 'https://www.atlaren.com/',
  },
  {
    name: 'Growwin Internationals',
    year: '2024',
    description: 'An international trade and business website designed to showcase global services, company credibility, and export-focused operations. Features include multi-language support and partner network showcase.',
    category: 'Business Website',
    status: 'Live',
    image: '/projects/growwin.png',
    link: 'http://growwinternationals.com/',
  },
  {
    name: 'Xrone',
    year: '2024',
    description: 'A modern technology product website built to present a digital brand, product vision, and technical capabilities. Includes 3D product visualizations and smooth animations.',
    category: 'Product Website',
    status: 'Live',
    image: '/projects/xrone.png',
    link: 'https://xronetech.netlify.app/',
  },
  {
    name: 'AI Voice Agent',
    year: '2025',
    description: 'An AI-powered voice agent deployed for handling inbound customer calls, inquiries, and support workflows at scale. Built with LiveKit and OpenAI for natural conversations.',
    category: 'AI Voice Agent',
    status: 'Private',
    image: '/projects/ai-voice.png',
    link: null,
  },
  {
    name: 'AI Chat Agent',
    year: '2025',
    description: 'An internal and customer-facing AI chat agent built to manage structured conversations, FAQs, and business inquiries. Powered by LangChain and GPT-4 for intelligent responses.',
    category: 'AI Chat Agent',
    status: 'Private',
    image: '/projects/ai-chat.png',
    link: null,
  }
];

interface CaseStudiesSectionProps {
  hideHeader?: boolean;
}

export const CaseStudiesSection = ({ hideHeader = false }: CaseStudiesSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Get visible cards (show 5 cards: 2 left, center, 2 right)
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + projects.length) % projects.length);
    const adjustedDiff = normalizedDiff > projects.length / 2 ? normalizedDiff - projects.length : normalizedDiff;

    // Base styles for each position
    const positions: Record<number, { x: number; scale: number; rotate: number; zIndex: number; opacity: number }> = {
      '-2': { x: -320, scale: 0.7, rotate: -8, zIndex: 1, opacity: 0.4 },
      '-1': { x: -180, scale: 0.85, rotate: -4, zIndex: 2, opacity: 0.7 },
      '0': { x: 0, scale: 1, rotate: 0, zIndex: 3, opacity: 1 },
      '1': { x: 180, scale: 0.85, rotate: 4, zIndex: 2, opacity: 0.7 },
      '2': { x: 320, scale: 0.7, rotate: 8, zIndex: 1, opacity: 0.4 },
    };

    // Get position or hide if too far
    if (adjustedDiff < -2 || adjustedDiff > 2) {
      return { x: adjustedDiff < 0 ? -500 : 500, scale: 0.5, rotate: 0, zIndex: 0, opacity: 0 };
    }

    return positions[adjustedDiff.toString() as keyof typeof positions] || positions['0'];
  };

  return (
    <section className="section-padding relative bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container-standard relative">
        {!hideHeader && (
          <FadeIn>
            <div className="mb-12 md:mb-20 text-center">
              <span className="label-uppercase !text-primary mb-4 block">Portfolio</span>
              <h2 className="mb-4">
                What We <span className="gradient-text">Ship</span>
              </h2>
              <p className="text-lg text-muted-foreground/90 leading-relaxed max-w-2xl mx-auto">
                Real projects we've built for real clients. Hover to explore.
              </p>
            </div>
          </FadeIn>
        )}
      </div>

      {/* Carousel Container */}
      <div className="relative h-[500px] md:h-[550px] flex items-center justify-center">
        {/* Navigation Arrow - Left */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-12 z-20 p-3 md:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm group"
          aria-label="Previous project"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards Container */}
        <div className="relative w-full max-w-[350px] md:max-w-[400px] h-[420px] md:h-[480px]">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => {
              const style = getCardStyle(index);
              const isHovered = hoveredIndex === index;
              const isCenter = index === activeIndex;

              return (
                <motion.div
                  key={project.name}
                  className="absolute top-0 left-0 w-full h-full cursor-pointer"
                  initial={false}
                  animate={{
                    x: style.x,
                    scale: style.scale,
                    rotateZ: style.rotate,
                    zIndex: isHovered && isCenter ? 10 : style.zIndex,
                    opacity: style.opacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={() => setActiveIndex(index)}
                  onHoverStart={() => isCenter && setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <div
                    className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${isCenter ? 'shadow-[0_25px_60px_rgba(0,0,0,0.5)]' : ''
                      }`}
                  >
                    {/* Image Background */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ opacity: isHovered && isCenter ? 0 : 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Dark overlay for non-center cards */}
                      <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${isCenter ? 'opacity-0' : 'opacity-60'}`} />

                      {/* Bottom gradient for title */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                      {/* Title overlay on image */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
                          {project.name}
                        </h3>
                      </div>
                    </motion.div>

                    {/* Hover Details Panel - Yellow/Accent Background */}
                    <motion.div
                      className="absolute inset-0 p-6 md:p-8 flex flex-col"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isHovered && isCenter ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      style={{
                        background: 'linear-gradient(135deg, #FACC15 0%, #EAB308 100%)',
                        pointerEvents: isHovered && isCenter ? 'auto' : 'none',
                      }}
                    >
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                          {project.name}
                        </h3>
                        <p className="text-xs font-semibold text-black/60 uppercase tracking-wider mb-6">
                          BUILT IN {project.year}
                        </p>
                        <p className="text-sm md:text-base text-black/80 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Action Button */}
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-black/80 transition-colors w-fit"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Live
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-black/20 text-black/60 text-sm font-medium w-fit">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          Private Project
                        </span>
                      )}
                    </motion.div>

                    {/* Status Badge (visible on image view) */}
                    <motion.div
                      className="absolute top-4 right-4"
                      animate={{ opacity: isHovered && isCenter ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${project.status === 'Live'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-white/20 text-white/80 border border-white/20'
                        }`}>
                        {project.status === 'Live' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        )}
                        {project.status}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Arrow - Right */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-12 z-20 p-3 md:p-4 rounded-full bg-primary text-black hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 group"
          aria-label="Next project"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-3 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${index === activeIndex
                ? 'w-8 h-3 bg-gradient-to-r from-primary to-accent'
                : 'w-3 h-3 bg-white/20 hover:bg-white/40'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="mt-6 flex justify-center">
        <div className="flex items-center gap-4 text-sm text-muted-foreground/60">
          <span className="font-mono text-2xl font-bold text-primary">{String(activeIndex + 1).padStart(2, '0')}</span>
          <div className="w-12 h-px bg-white/20" />
          <span className="font-mono text-lg text-white/40">{String(projects.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
};

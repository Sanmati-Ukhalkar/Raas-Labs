import { FadeIn } from '@/components/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'AI Voice Systems',
    subtitle: 'for Operations',
    description: 'Design and deploy AI-powered voice systems for high-volume customer interactions, including order verification, support automation, and call handling at scale.',
    tagline: 'Built for reliability, accuracy, and operational efficiency.',
    stats: { metric: '10M+', label: 'Calls Handled' },
  },
  {
    id: 2,
    title: 'Conversational AI',
    subtitle: 'Platforms',
    description: 'Develop enterprise-grade conversational AI systems across voice and chat, integrated with internal tools, databases, and workflows.',
    tagline: 'Not chatbots — production-ready systems.',
    stats: { metric: '99.9%', label: 'Uptime' },
  },
  {
    id: 3,
    title: 'AI Automation',
    subtitle: 'for Business Workflows',
    description: 'Architect AI-driven automation for repetitive and decision-heavy processes across customer operations, sales, and internal teams.',
    tagline: 'Focused on measurable cost and time reduction.',
    stats: { metric: '60%', label: 'Cost Reduction' },
  },
  {
    id: 4,
    title: 'Custom AI System',
    subtitle: 'Architecture',
    description: 'Design and build custom AI architectures aligned with business requirements, security standards, and scalability needs.',
    tagline: 'Tailored systems, not off-the-shelf tools.',
    stats: { metric: '100%', label: 'Custom Built' },
  },
  {
    id: 5,
    title: 'AI Integration',
    subtitle: '& Enablement',
    description: 'Integrate AI capabilities into existing enterprise systems such as CRMs, ERPs, databases, and communication platforms.',
    tagline: 'AI that fits into your ecosystem, not alongside it.',
    stats: { metric: '50+', label: 'Integrations' },
  },
  {
    id: 6,
    title: 'Proof of Value',
    subtitle: '& Pilot Programs',
    description: 'Execute controlled pilots to validate AI use cases before full-scale rollout, with clear success metrics and outcomes.',
    tagline: 'De-risking AI adoption for enterprises.',
    stats: { metric: '4 Weeks', label: 'Avg. Duration' },
  },
];

interface ServicesSectionProps {
  detailed?: boolean;
}

export const ServicesSection = ({ detailed = false }: ServicesSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  const handleClick = (index: number) => {
    console.log('Clicked service:', index);
    setActiveIndex(index);
  };

  return (
    <section className="relative bg-background">
      {!detailed && <div className="section-divider absolute top-0 left-0 right-0" />}

      <div className="container-standard py-16 md:py-24">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-12 md:mb-16 max-w-3xl">
            <p className="label-uppercase mb-6">What We Do</p>
            <h2 className="mb-6">
              Enterprise <span className="gradient-text">AI Solutions</span>
            </h2>
          </div>
        </FadeIn>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          {/* Left Menu */}
          <div className="lg:w-1/3 relative z-20">
            <nav className="space-y-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => handleClick(index)}
                  style={{ cursor: 'pointer' }}
                  className={`
                    w-full text-left px-5 py-4 rounded-2xl
                    transition-all duration-300 ease-out
                    flex items-center gap-4 group relative
                    border cursor-pointer
                    ${activeIndex === index
                      ? 'bg-white/[0.05] border-white/10'
                      : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5'
                    }
                  `}
                >
                  {/* Number */}
                  <span className={`
                    text-sm font-mono w-8 transition-colors duration-300 pointer-events-none
                    ${activeIndex === index ? 'text-primary' : 'text-white/20 group-hover:text-white/40'}
                  `}>
                    0{service.id}
                  </span>

                  {/* Vertical line */}
                  <div className={`
                    w-0.5 rounded-full transition-all duration-300 pointer-events-none
                    ${activeIndex === index
                      ? 'h-10 bg-gradient-to-b from-primary via-accent to-secondary'
                      : 'h-6 bg-white/10 group-hover:bg-white/20'
                    }
                  `} />

                  {/* Title */}
                  <div className="flex-1 pointer-events-none">
                    <span className={`
                      block text-base font-medium transition-colors duration-300
                      ${activeIndex === index ? 'text-white' : 'text-white/40 group-hover:text-white/70'}
                    `}>
                      {service.title}
                    </span>
                    <span className={`
                      block text-sm transition-colors duration-300
                      ${activeIndex === index ? 'text-white/50' : 'text-white/20 group-hover:text-white/40'}
                    `}>
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Arrow */}
                  <svg
                    className={`
                      w-5 h-5 transition-all duration-300 pointer-events-none
                      ${activeIndex === index
                        ? 'text-primary opacity-100 translate-x-0'
                        : 'text-white/20 opacity-0 -translate-x-2'
                      }
                    `}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </nav>

            {/* Progress bar */}
            <div className="mt-8 px-5">
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                  animate={{ width: `${((activeIndex + 1) / services.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>

          {/* Right Content Panel */}
          <div className="lg:w-2/3 relative z-10">
            <div className="relative min-h-[400px] md:min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-full"
                >
                  <div className="h-full p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10">

                    {/* Service number badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs font-mono text-primary">
                        SERVICE 0{activeService.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
                      {activeService.title}
                    </h3>
                    <h4 className="text-2xl md:text-3xl font-light text-white/40 mb-8">
                      {activeService.subtitle}
                    </h4>

                    {/* Description */}
                    <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl">
                      {activeService.description}
                    </p>

                    {/* Tagline */}
                    <div className="flex items-center gap-3 mb-10">
                      <div className="w-10 h-px bg-gradient-to-r from-primary to-transparent" />
                      <p className="text-sm text-white/40 italic">
                        {activeService.tagline}
                      </p>
                    </div>

                    {/* Stats & CTA */}
                    <div className="flex flex-wrap items-end justify-between gap-6 pt-8 border-t border-white/5">
                      {/* Stat */}
                      <div>
                        <p className="text-4xl md:text-5xl font-bold gradient-text">
                          {activeService.stats.metric}
                        </p>
                        <p className="text-xs uppercase tracking-widest text-white/30 mt-1">
                          {activeService.stats.label}
                        </p>
                      </div>

                      {/* CTA */}
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all text-sm font-medium text-white"
                      >
                        Learn More
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

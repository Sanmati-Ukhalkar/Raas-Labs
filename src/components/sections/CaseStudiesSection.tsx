import { FadeIn } from '@/components/FadeIn';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Atlaren',
    problem: 'A business-focused digital platform built to present services clearly, improve online presence, and support customer engagement.',
    solution: 'Custom Software',
    status: 'Live',
    action: { text: 'View Live', link: 'https://www.atlaren.com/', external: true },
  },
  {
    name: 'Growwin Internationals',
    problem: 'An international trade and business website designed to showcase global services, company credibility, and export-focused operations.',
    solution: 'Business Website',
    status: 'Live',
    action: { text: 'View Live', link: 'http://growwinternationals.com/', external: true },
  },
  {
    name: 'Xrone',
    problem: 'A modern technology product website built to present a digital brand, product vision, and technical capabilities.',
    solution: 'Product Website',
    status: 'Live',
    action: { text: 'View Live', link: 'https://xronetech.netlify.app/', external: true },
  },
  {
    name: 'Confidential AI Voice Agent',
    problem: 'An AI-powered voice agent deployed for handling inbound customer calls, inquiries, and support workflows at scale.',
    solution: 'AI Voice Agent',
    status: 'Private',
    action: { text: 'Private Engagement', link: null, disabled: true },
  },
  {
    name: 'Confidential AI Chat Agent',
    problem: 'An internal and customer-facing AI chat agent built to manage structured conversations, FAQs, and business inquiries.',
    solution: 'AI Chat Agent',
    status: 'Private',
    action: { text: 'Private Engagement', link: null, disabled: true },
  }
];

interface CaseStudiesSectionProps {
  hideHeader?: boolean;
}

export const CaseStudiesSection = ({ hideHeader = false }: CaseStudiesSectionProps) => {
  return (
    <section className="section-padding relative bg-background">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container-standard">
        {!hideHeader && (
          <FadeIn>
            <div className="mb-16 md:mb-24 max-w-3xl">
              <h2 className="mb-6">
                Selected <span className="gradient-text">Client Work</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed">
                Below are selected examples of real client engagements. Some clients are named, others are anonymized based on confidentiality.
              </p>
            </div>
          </FadeIn>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 80} direction="up" blur scale>
              <div
                className="group h-full p-6 md:p-8 lg:p-10 card-premium flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="label-uppercase !text-primary/80">
                      {project.solution}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${project.status === 'Live' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-white/5 text-white/50 border-white/10'}`}>
                      {project.status === 'Live' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-tertiary uppercase tracking-wider mb-2">Overview</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  </div>
                </div>

                {project.action && (
                  <div className="mt-8 pt-6 border-t border-border/50">
                    {project.action.disabled ? (
                      <div className="text-sm font-medium text-muted-foreground/50 flex items-center gap-2 cursor-not-allowed">
                        {project.action.text}
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    ) : (
                      <a
                        href={project.action.link || '#'}
                        target={project.action.external ? "_blank" : "_self"}
                        rel={project.action.external ? "noopener noreferrer" : ""}
                        className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2 w-fit"
                      >
                        {project.action.text}
                        <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

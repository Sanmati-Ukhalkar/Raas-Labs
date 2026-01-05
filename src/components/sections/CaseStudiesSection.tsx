import { FadeIn } from '@/components/FadeIn';

const caseStudies = [
  {
    title: 'Bhartiye Chhatra Sansad (LPU)',
    category: 'PR & Digital Reach',
    description: 'Comprehensive PR and digital reach campaign for one of India\'s largest student parliament initiatives.',
  },
  {
    title: 'Bihar Largest Hindu Event',
    category: 'Media Amplification',
    description: 'Full-scale media amplification strategy that positioned the event as a cultural landmark.',
  },
  {
    title: 'Political Campaign Strategy',
    category: 'Digital Execution',
    description: 'End-to-end digital strategy and execution, managing narrative and voter engagement at scale.',
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-36 lg:py-44 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-6 lg:px-20">
        <FadeIn>
          <div className="mb-20">
            <p className="label-uppercase mb-6">
              Our Work
            </p>
            <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.05]">
              Campaigns & <span className="gradient-text">Case Studies</span>
            </h2>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-5">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.title} delay={index * 80}>
              <div className="group h-full p-8 lg:p-9 card-premium flex flex-col cursor-pointer">
                <p className="label-uppercase text-primary/70 mb-6">
                  {study.category}
                </p>
                <h3 className="text-lg font-semibold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300 leading-snug">
                  {study.title}
                </h3>
                <p className="text-muted-foreground leading-[1.75] flex-grow font-light text-[14px] max-w-xs">
                  {study.description}
                </p>
                <div className="mt-8 pt-6 border-t border-border/60">
                  <span className="text-[13px] text-tertiary group-hover:text-foreground transition-colors duration-300 flex items-center gap-2">
                    View details
                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

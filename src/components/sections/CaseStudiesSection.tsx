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

interface CaseStudiesSectionProps {
  hideHeader?: boolean;
}

export const CaseStudiesSection = ({ hideHeader = false }: CaseStudiesSectionProps) => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6 lg:px-24">
        {!hideHeader && (
          <FadeIn>
            <div className="mb-16 lg:mb-24">
              <p className="label-uppercase mb-8">
                Our Work
              </p>
              <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold tracking-[-0.04em] leading-[0.95]">
                Campaigns & <span className="gradient-text">Case Studies</span>
              </h2>
            </div>
          </FadeIn>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.title} delay={index * 60}>
              <div className="group h-full p-9 lg:p-10 card-premium flex flex-col">
                <p className="label-uppercase text-primary/60 mb-7">
                  {study.category}
                </p>
                <h3 className="text-[18px] font-semibold mb-5 tracking-tight group-hover:text-primary transition-colors duration-300 leading-snug">
                  {study.title}
                </h3>
                <p className="text-muted-foreground leading-[1.8] flex-grow text-[14px]">
                  {study.description}
                </p>
                <div className="mt-10 pt-7 border-t border-border/50">
                  <span className="text-[13px] text-tertiary group-hover:text-foreground transition-colors duration-300 flex items-center gap-2">
                    View details
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

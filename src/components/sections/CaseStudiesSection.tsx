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
    <section className="section-padding relative bg-background">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container-standard">
        {!hideHeader && (
          <FadeIn>
            <div className="mb-20 md:mb-28">
              <p className="label-uppercase mb-6">
                Our Work
              </p>
              <h2 className="mb-8">
                Campaigns & <span className="gradient-text">Case Studies</span>
              </h2>
            </div>
          </FadeIn>
        )}

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.title} delay={index * 80} direction="up" blur scale>
              <div className="group h-full p-8 lg:p-10 card-premium flex flex-col">
                <p className="label-uppercase !text-primary/60 mb-6 group-hover:!text-primary transition-colors">
                  {study.category}
                </p>
                <h3 className="mb-4 group-hover:text-primary transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="flex-grow">
                  {study.description}
                </p>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <span className="text-sm font-medium text-tertiary group-hover:text-foreground transition-colors duration-300 flex items-center gap-2">
                    View Impact
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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

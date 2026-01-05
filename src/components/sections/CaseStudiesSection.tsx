import { FadeIn } from '@/components/FadeIn';

const caseStudies = [
  {
    title: 'State-Level Political Narrative Campaign',
    category: 'Political Strategy',
    description: 'Engineered perception shift across 50M+ voters through coordinated multi-platform narrative deployment.',
  },
  {
    title: 'Viral Influencer Brand Launch',
    category: 'Influencer Marketing',
    description: 'Orchestrated launch generating 100M+ impressions in 72 hours with strategic creator partnerships.',
  },
  {
    title: 'Crisis Reputation Management',
    category: 'PR & Communications',
    description: 'Rapid response framework that neutralized narrative within 48 hours and restored brand equity.',
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-32 lg:py-40 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <FadeIn>
          <div className="mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-tertiary mb-5 font-medium">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em]">
              Campaigns That <span className="gradient-text">Shaped Influence</span>
            </h2>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.title} delay={index * 100}>
              <div className="group h-full p-8 lg:p-9 card-premium hover-glow flex flex-col cursor-pointer">
                <div className="text-xs font-medium text-primary/80 uppercase tracking-[0.15em] mb-5">
                  {study.category}
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight group-hover:text-primary transition-colors duration-500 leading-snug">
                  {study.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow font-light text-[15px]">
                  {study.description}
                </p>
                <div className="mt-8 pt-6 border-t border-border">
                  <span className="text-sm text-tertiary group-hover:text-primary transition-colors duration-500 flex items-center gap-2">
                    View case study
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

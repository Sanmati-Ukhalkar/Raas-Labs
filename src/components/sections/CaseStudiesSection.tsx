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
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn>
          <h2 className="text-3xl md:text-heading font-bold mb-16">
            Campaigns That <span className="gradient-text">Shaped Influence</span>
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.title} delay={index * 100}>
              <div className="group h-full p-8 rounded-2xl bg-card border border-border hover:glow-effect hover:border-primary/30 transition-all duration-500 flex flex-col">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                  {study.category}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {study.description}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    View case study
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

import { FadeIn } from '@/components/FadeIn';

const points = [
  'Active experience across political, celebrity, and influencer campaigns',
  'Dedicated teams assigned to each project',
  'Capability to manage high-reach, reputation-sensitive campaigns',
  'Execution across multiple digital platforms and media formats',
];

export const AuthoritySection = () => {
  return (
    <section className="py-32 lg:py-40 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          <FadeIn>
            <div className="lg:sticky lg:top-32">
              <p className="text-sm uppercase tracking-[0.2em] text-tertiary mb-5 font-medium">
                Why The Increations
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7 tracking-[-0.02em] leading-[1.05]">
                Built on Experience.
                <br />
                <span className="text-secondary">Proven at Scale.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {points.map((point, index) => (
              <FadeIn key={point} delay={index * 80}>
                <div className="flex items-center gap-5 p-6 rounded-xl bg-card border border-border group hover:border-muted-foreground/20 transition-all duration-500 hover-glow">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-500">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium tracking-tight">{point}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

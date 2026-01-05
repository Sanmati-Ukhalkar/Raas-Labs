import { FadeIn } from '@/components/FadeIn';

const points = [
  'Active experience across political, celebrity, and influencer campaigns',
  'Dedicated teams assigned to each project',
  'Capability to manage high-reach, reputation-sensitive campaigns',
  'Execution across multiple digital platforms and media formats',
];

export const AuthoritySection = () => {
  return (
    <section className="py-36 lg:py-44 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <FadeIn>
            <div className="lg:sticky lg:top-32">
              <p className="label-uppercase mb-6">
                Why Us
              </p>
              <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.05]">
                Built on <span className="gradient-text">Experience</span>.
                <br />
                <span className="text-secondary">Proven at Scale.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-4 lg:pt-4">
            {points.map((point, index) => (
              <FadeIn key={point} delay={index * 60}>
                <div className="flex items-start gap-5 p-6 rounded-xl bg-card border border-border/60 group hover:border-border transition-colors duration-300">
                  <div className="w-9 h-9 rounded-full bg-muted/80 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[16px] font-medium tracking-tight leading-relaxed pt-1.5">{point}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

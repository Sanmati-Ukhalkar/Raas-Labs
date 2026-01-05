import { FadeIn } from '@/components/FadeIn';

const points = [
  'Active experience across political, celebrity, and influencer campaigns',
  'Dedicated teams assigned to each project',
  'Capability to manage high-reach, reputation-sensitive campaigns',
  'Execution across multiple digital platforms and media formats',
];

export const AuthoritySection = () => {
  return (
    <section className="py-40 lg:py-52 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-36 items-start">
          <FadeIn>
            <div className="lg:sticky lg:top-32">
              <p className="label-uppercase mb-8">
                Why Us
              </p>
              <h2 className="text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold tracking-[-0.04em] leading-[0.95]">
                Built on <span className="gradient-text">Experience</span>.
                <br />
                <span className="text-secondary">Proven at Scale.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-5 lg:pt-6">
            {points.map((point, index) => (
              <FadeIn key={point} delay={index * 50}>
                <div className="flex items-start gap-6 p-7 rounded-xl bg-card border border-border/50 group hover:border-border transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[16px] font-medium tracking-tight leading-[1.6] pt-2">{point}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

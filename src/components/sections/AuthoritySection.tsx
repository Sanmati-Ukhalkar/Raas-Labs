import { FadeIn } from '@/components/FadeIn';

const points = [
  'Active experience across political, celebrity, and influencer campaigns',
  'Dedicated teams assigned to each project',
  'Capability to manage high-reach, reputation-sensitive campaigns',
  'Execution across multiple digital platforms and media formats',
];

export const AuthoritySection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container-standard">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <FadeIn>
            <div className="lg:sticky lg:top-32">
              <p className="label-uppercase mb-8">
                Why Us
              </p>
              <h2 className="mb-8">
                Built on <span className="gradient-text">Experience</span>.
                <br />
                <span className="text-secondary">Proven at Scale.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-4 md:space-y-6 lg:pt-6">
            {points.map((point, index) => (
              <FadeIn key={point} delay={index * 80} direction="up" blur scale>
                <div className="flex items-start gap-6 p-6 md:p-8 card-premium group">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium tracking-tight group-hover:text-primary transition-colors pt-2">
                    {point}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

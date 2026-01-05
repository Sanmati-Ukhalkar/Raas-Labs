import { FadeIn } from '@/components/FadeIn';

const points = [
  'Multi-platform campaign execution',
  'Dedicated teams per campaign',
  'High-volume reach management',
  'End-to-end strategy and amplification',
];

export const AuthoritySection = () => {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-heading font-bold mb-6">
                Built for Scale.
                <br />
                <span className="text-secondary">Proven in Execution.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                Our infrastructure handles the complexity of massive campaigns 
                while maintaining precision and impact at every touchpoint.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {points.map((point, index) => (
              <FadeIn key={point} delay={index * 100}>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border group hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium">{point}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

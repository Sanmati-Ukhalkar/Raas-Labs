import { FadeIn } from '@/components/FadeIn';

const metrics = [
  { value: '100+', label: 'Top Influencers Collaborated With' },
  { value: '30+', label: 'Bollywood Celebrities' },
  { value: '2000+', label: 'Meme & Distribution Pages' },
  { value: '1 Billion+', label: 'Combined Viewer Base' },
];

export const ProofSection = () => {
  return (
    <section className="py-32 lg:py-40 relative">
      {/* Subtle top divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <FadeIn>
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-tertiary mb-5 font-medium">
              Influence at Massive Scale
            </p>
            <p className="text-lg text-secondary leading-relaxed font-light">
              Our campaigns operate at the intersection of politics, media, and culture — delivering reach, visibility, and long-term authority.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {metrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={index * 80}>
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm md:text-base text-tertiary leading-snug">
                  {metric.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

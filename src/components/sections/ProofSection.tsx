import { FadeIn } from '@/components/FadeIn';

const metrics = [
  { value: '1B+', label: 'Total Audience Reach' },
  { value: '2000+', label: 'Distribution & Meme Pages' },
  { value: '100+', label: 'Top Influencers' },
  { value: '30+', label: 'Bollywood Celebrity Campaigns' },
];

export const ProofSection = () => {
  return (
    <section className="py-32 lg:py-40 relative">
      {/* Subtle top divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-tertiary text-center mb-20 font-medium">
            Influence at Massive Scale
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {metrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={index * 80}>
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm md:text-base text-tertiary leading-snug max-w-[140px] mx-auto lg:mx-0">
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

import { FadeIn } from '@/components/FadeIn';

const metrics = [
  { value: '1B+', label: 'Total Audience Reach' },
  { value: '2000+', label: 'Distribution & Meme Pages' },
  { value: '100+', label: 'Top Influencers' },
  { value: '30+', label: 'Bollywood Celebrity Campaigns' },
];

export const ProofSection = () => {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-16 text-secondary">
            Influence at Massive Scale
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={index * 100}>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 gradient-text">
                  {metric.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground leading-tight">
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

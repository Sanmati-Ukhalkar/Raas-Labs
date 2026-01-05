import { FadeIn } from '@/components/FadeIn';

const metrics = [
  { value: '100+', label: 'Top Influencers' },
  { value: '30+', label: 'Bollywood Celebrities' },
  { value: '2000+', label: 'Distribution Pages' },
  { value: '1B+', label: 'Combined Reach' },
];

export const ProofSection = () => {
  return (
    <section className="py-36 lg:py-44 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-6 lg:px-20">
        <FadeIn>
          <div className="text-center mb-24 max-w-xl mx-auto">
            <p className="label-uppercase mb-6">
              Influence at Scale
            </p>
            <p className="text-[17px] text-secondary leading-[1.7] font-light">
              Our campaigns operate at the intersection of politics, media, and culture — delivering reach, visibility, and long-term authority.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-20">
          {metrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={index * 60}>
              <div className="text-center">
                <div className="metric-value text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight mb-3">
                  {metric.value}
                </div>
                <div className="text-[13px] text-tertiary tracking-wide">
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

import { FadeIn } from '@/components/FadeIn';
import { useCountUp } from '@/hooks/useCountUp';

interface MetricCardProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const MetricCard = ({ value, suffix, label, delay }: MetricCardProps) => {
  const { ref, displayValue } = useCountUp({ 
    end: value, 
    duration: 2500, 
    suffix 
  });

  return (
    <FadeIn delay={delay}>
      <div ref={ref} className="text-center group">
        <div className="metric-value text-[3.5rem] md:text-[4.25rem] lg:text-[5rem] font-bold tracking-[-0.03em] mb-4 transition-transform duration-500">
          {displayValue}
        </div>
        <div className="text-[13px] text-tertiary tracking-[0.15em] uppercase group-hover:text-muted-foreground transition-colors duration-300">
          {label}
        </div>
      </div>
    </FadeIn>
  );
};

const metrics = [
  { value: 100, suffix: '+', label: 'Top Influencers' },
  { value: 30, suffix: '+', label: 'Bollywood Celebrities' },
  { value: 2000, suffix: '+', label: 'Distribution Pages' },
  { value: 1, suffix: 'B+', label: 'Combined Reach' },
];

export const ProofSection = () => {
  return (
    <section className="py-44 lg:py-56 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, hsl(289 52% 64% / 0.08), transparent)'
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <FadeIn>
          <div className="text-center mb-32 max-w-2xl mx-auto">
            <p className="label-uppercase mb-10">
              Influence at Massive Scale
            </p>
            <p className="text-[17px] md:text-[18px] text-secondary leading-[1.85] max-w-xl mx-auto">
              Our campaigns operate at the intersection of politics, media, and culture — delivering reach, visibility, and long-term authority.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-24 lg:gap-x-20">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

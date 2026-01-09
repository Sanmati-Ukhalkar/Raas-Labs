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
    duration: 1500, // Faster count-up
    suffix
  });

  return (
    <FadeIn delay={delay} blur direction="up" scale>
      <div ref={ref} className="text-center group">
        <div className="metric-value text-[clamp(2.5rem,6vw,4rem)] font-extrabold tracking-tight mb-3 transition-transform duration-500 group-hover:scale-110">
          {displayValue}
        </div>
        <div className="label-uppercase !text-[10px] opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all duration-300">
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
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container-standard relative z-10">
        <FadeIn>
          <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
            <p className="label-uppercase mb-6">
              Influence at Massive Scale
            </p>
            <h2 className="mb-8">Proven at <span className="gradient-text">Scale</span>.</h2>
            <p className="max-w-xl mx-auto !text-sm text-white/50">
              Our campaigns operate at the intersection of politics, media, and culture — delivering reach, visibility, and long-term authority.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-16">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

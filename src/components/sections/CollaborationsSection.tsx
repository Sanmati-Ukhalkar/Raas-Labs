import { FadeIn } from '@/components/FadeIn';
import { HorizontalScroller } from '@/components/HorizontalScroller';

// Placeholder data - replace with real data/images later
const influencers = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Influencer ${i + 1}`,
}));

const celebrities = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Celebrity ${i + 1}`,
}));

const memePages = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Page ${i + 1}`,
}));

const clients = [
  'TEDx',
  'Plantix',
  'The Cabbana',
  'Marwadi University',
  'BJP',
  'Monginis',
  'Samsung',
  'LPU',
];

interface PlaceholderCardProps {
  label?: string;
  className?: string;
  variant?: 'portrait' | 'square' | 'wide';
}

const PlaceholderCard = ({ label, className = '', variant = 'square' }: PlaceholderCardProps) => {
  const aspectClasses = {
    portrait: 'aspect-[3/4]',
    square: 'aspect-square',
    wide: 'aspect-[4/3]',
  };

  return (
    <div 
      className={`
        group relative overflow-hidden rounded-2xl
        bg-gradient-to-b from-card to-background
        border border-border/30
        hover:border-primary/20
        transition-all duration-400
        ${aspectClasses[variant]}
        ${className}
      `}
    >
      {/* Subtle inner glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      
      {/* Placeholder content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-muted-foreground/40 text-sm tracking-wide">{label || 'IMG'}</span>
      </div>
    </div>
  );
};

const ClientLogo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center px-10 py-6 opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0">
    <span className="text-lg font-semibold tracking-wide whitespace-nowrap">{name}</span>
  </div>
);

export const CollaborationsSection = () => {
  return (
    <section className="py-32 lg:py-44 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      {/* Ambient glow */}
      <div 
        className="absolute top-1/4 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(243 85% 68% / 0.06), transparent 70%)'
        }}
      />

      {/* Header */}
      <div className="container mx-auto px-6 lg:px-24 mb-24">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <p className="label-uppercase mb-8">
              Our Collaborations With
            </p>
            <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-[-0.04em] leading-[0.95] mb-8">
              Influence at <span className="gradient-text">Massive Scale</span>
            </h2>
            <p className="text-[17px] md:text-[18px] text-secondary leading-[1.8] max-w-2xl mx-auto">
              Trusted by influencers, celebrities, and digital media networks reaching millions every day.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* 100+ Top Influencers */}
      <div className="mb-20">
        <div className="container mx-auto px-6 lg:px-24 mb-10">
          <FadeIn>
            <h3 className="text-[1.75rem] md:text-[2rem] font-bold tracking-tight">
              100+ Top Influencers
            </h3>
          </FadeIn>
        </div>
        <FadeIn delay={100}>
          <HorizontalScroller autoScrollSpeed={25}>
            {influencers.map((item) => (
              <PlaceholderCard 
                key={item.id} 
                variant="wide"
                className="w-[280px] md:w-[320px] flex-shrink-0"
              />
            ))}
          </HorizontalScroller>
        </FadeIn>
      </div>

      {/* 30+ Bollywood Celebrities */}
      <div className="mb-20">
        <div className="container mx-auto px-6 lg:px-24 mb-10">
          <FadeIn>
            <h3 className="text-[1.75rem] md:text-[2rem] font-bold tracking-tight">
              30+ Bollywood Celebrities
            </h3>
          </FadeIn>
        </div>
        <FadeIn delay={100}>
          <HorizontalScroller autoScrollSpeed={20}>
            {celebrities.map((item) => (
              <PlaceholderCard 
                key={item.id}
                label="STAR"
                variant="portrait"
                className="w-[220px] md:w-[260px] flex-shrink-0"
              />
            ))}
          </HorizontalScroller>
        </FadeIn>
      </div>

      {/* 2000+ Meme Pages */}
      <div className="mb-28">
        <div className="container mx-auto px-6 lg:px-24 mb-10">
          <FadeIn>
            <div className="flex items-baseline gap-4 flex-wrap">
              <h3 className="text-[1.75rem] md:text-[2rem] font-bold tracking-tight">
                2000+ Meme Pages
              </h3>
              <span className="text-primary font-medium text-lg">
                1 Billion+ Viewer Base
              </span>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={100}>
          <HorizontalScroller autoScrollSpeed={35}>
            {memePages.map((item) => (
              <div 
                key={item.id}
                className="w-[180px] md:w-[200px] aspect-[4/3] flex-shrink-0 rounded-xl bg-gradient-to-b from-card to-background border border-border/30 hover:border-primary/20 transition-all duration-300 flex items-center justify-center group"
              >
                {/* Circle placeholder for profile */}
                <div className="w-12 h-12 rounded-full bg-muted-foreground/10 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
            ))}
          </HorizontalScroller>
        </FadeIn>
      </div>

      {/* Our Clients - Logo Ticker */}
      <div>
        <div className="container mx-auto px-6 lg:px-24 mb-10">
          <FadeIn>
            <h3 className="text-[1.5rem] font-semibold tracking-tight text-center">
              Our Clients
            </h3>
          </FadeIn>
        </div>
        <FadeIn delay={100}>
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <HorizontalScroller autoScrollSpeed={40} className="py-6">
              {[...clients, ...clients].map((client, i) => (
                <ClientLogo key={`${client}-${i}`} name={client} />
              ))}
            </HorizontalScroller>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

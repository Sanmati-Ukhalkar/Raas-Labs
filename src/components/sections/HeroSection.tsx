import { Button } from '@/components/ui/button';
import heroVisual from '@/assets/hero-visual.jpg';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle gradient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 pointer-events-none animate-pulse-glow"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-display font-bold leading-none tracking-tight">
                Influence,{' '}
                <span className="gradient-text">Engineered</span>
                <br />
                at Scale.
              </h1>
              <p className="text-lg md:text-xl text-secondary max-w-lg leading-relaxed">
                We design perception, authority, and reach for creators and brands operating at the top.
              </p>
            </div>
            
            <Button variant="hero" size="xl" className="group">
              Let's explore if we're a fit
              <svg 
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-fade-in animate-delay-300">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden gradient-border glow-effect">
              <img 
                src={heroVisual} 
                alt="Digital influence visualization - abstract flowing light streams" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

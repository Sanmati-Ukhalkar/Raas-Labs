import { Button } from '@/components/ui/button';
import heroVisual from '@/assets/hero-visual.jpg';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden py-20 lg:py-0">
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/3 right-1/4 w-[900px] h-[900px] pointer-events-none animate-pulse-glow"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="space-y-10">
            <div className="space-y-7 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[0.95] tracking-[-0.03em]">
                Influence,
                <br />
                <span className="gradient-text">Engineered</span>
                <br />
                at Scale.
              </h1>
              <p className="text-lg md:text-xl text-secondary max-w-md leading-relaxed font-light">
                We design perception, authority, and reach for creators and brands operating at the top.
              </p>
            </div>
            
            <div className="animate-fade-in-up animate-delay-400">
              <Button variant="hero" size="xl" className="group">
                <span>Explore working together</span>
                <svg 
                  className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-fade-in-up animate-delay-200">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden gradient-border glow-effect">
              <img 
                src={heroVisual} 
                alt="Digital influence visualization" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Button } from '@/components/ui/button';
import heroVisual from '@/assets/hero-visual.jpg';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-20 lg:pt-0 lg:pb-0">
      {/* Subtle ambient glow - reduced intensity */}
      <div 
        className="absolute top-1/4 right-1/3 w-[1000px] h-[1000px] pointer-events-none opacity-60"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left: Content */}
          <div className="space-y-12">
            <div className="space-y-8 animate-fade-in-up">
              <p className="label-uppercase">
                Crafting Your Digital Journey
              </p>
              <h1 className="text-[3.25rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5.25rem] font-bold leading-[0.92] tracking-[-0.035em]">
                Influence,
                <br />
                <span className="gradient-text">Engineered</span>
                <br />
                at Scale.
              </h1>
              <p className="text-[17px] md:text-lg text-secondary max-w-[380px] leading-[1.7] font-light">
                Strategic political consultancy and celebrity PR for leaders, public figures, and brands that matter.
              </p>
            </div>
            
            <div className="animate-fade-in-up animate-delay-300">
              <Button variant="hero" size="xl" className="group">
                <span>Let's explore if we're a fit</span>
                <svg 
                  className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-fade-in-up animate-delay-150">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden gradient-border">
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

import { Button } from '@/components/ui/button';
import heroVisual from '@/assets/hero-visual.jpg';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative pt-[72px]">
      <div className="container mx-auto px-6 lg:px-24 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
          {/* Left: Content */}
          <div className="space-y-14">
            <div className="space-y-10 animate-fade-in-up">
              <p className="label-uppercase">
                Crafting Your Digital Journey
              </p>
              <h1 className="text-[3.5rem] md:text-[4.25rem] lg:text-[4.75rem] xl:text-[5.5rem] font-bold leading-[0.9] tracking-[-0.04em]">
                Influence,
                <br />
                <span className="gradient-text">Engineered</span>
                <br />
                at Scale.
              </h1>
              <p className="text-[17px] text-secondary leading-[1.8] max-w-[360px]">
                Strategic political consultancy and celebrity PR for leaders, public figures, and brands that matter.
              </p>
            </div>
            
            <div className="animate-fade-in-up animate-delay-200">
              <Button variant="hero" size="xl">
                <span>Let's explore if we're a fit</span>
                <svg 
                  className="w-4 h-4 ml-1" 
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
          <div className="relative animate-fade-in-up animate-delay-100">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden gradient-border">
              <img 
                src={heroVisual} 
                alt="Digital influence visualization" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

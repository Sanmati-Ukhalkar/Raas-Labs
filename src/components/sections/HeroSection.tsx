import { Button } from '@/components/ui/button';
import TextPressure from '@/components/TextPressure';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative pt-[72px] overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-24 py-24 lg:py-0 relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          {/* Label */}
          <div className="animate-fade-in-up">
            <p className="label-uppercase">
              Crafting Your Digital Journey
            </p>
          </div>

          {/* TextPressure Headlines - Two Lines */}
          <div className="w-full space-y-4 animate-fade-in-up animate-delay-100">
            <div className="h-[80px] md:h-[120px] lg:h-[160px] xl:h-[200px]">
              <TextPressure
                text="Influence,"
                textColor="#ffffff"
                strokeColor="hsl(286, 55%, 64%)"
                width={true}
                weight={true}
                italic={false}
                alpha={false}
                stroke={false}
                scale={false}
                minFontSize={40}
                className="flex items-center justify-center"
              />
            </div>
            <div className="h-[80px] md:h-[120px] lg:h-[160px] xl:h-[200px]">
              <TextPressure
                text="Engineered at Scale."
                textColor="hsl(286, 55%, 64%)"
                strokeColor="hsl(339, 98%, 72%)"
                width={true}
                weight={true}
                italic={false}
                alpha={false}
                stroke={false}
                scale={false}
                minFontSize={40}
                className="flex items-center justify-center"
              />
            </div>
          </div>

          {/* Subtext */}
          <div className="animate-fade-in-up animate-delay-200 max-w-xl">
            <p className="text-[17px] text-secondary leading-[1.8]">
              Strategic political consultancy and celebrity PR for leaders, public figures, and brands that matter.
            </p>
          </div>
          
          {/* CTA */}
          <div className="animate-fade-in-up animate-delay-300">
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
      </div>
    </section>
  );
};

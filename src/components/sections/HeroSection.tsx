import { Button } from '@/components/ui/button';
import LightPillar from '@/components/ui/LightPillar';
import HeroBrandTransition from '@/components/ui/HeroBrandTransition';

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-32 pb-12 lg:pt-48 overflow-hidden">
      <HeroBrandTransition />
      {/* Light Pillar Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#030014]">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={20}
          interactive={false}
          mixBlendMode="normal"
        />
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
    </section>
  );
};

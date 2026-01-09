import { Button } from '@/components/ui/button';
import LightPillar from '@/components/ui/LightPillar';
import HeroBrandTransition from '@/components/ui/HeroBrandTransition';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section id="hero" className="h-[90vh] md:h-screen flex items-center relative pt-16 pb-12 overflow-hidden">
      <HeroBrandTransition />
      {/* Light Pillar Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-background"
      >
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1.0}
          rotationSpeed={0}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={20}
          interactive={false}
          mixBlendMode="normal"
        />
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>
    </section>
  );
};

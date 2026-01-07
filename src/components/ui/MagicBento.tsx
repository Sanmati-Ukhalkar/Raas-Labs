import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  image?: string;
  className?: string;
}

export interface MagicBentoProps {
  cards: BentoCardProps[];
  gridClassName?: string;
  glowColor?: string;
}

const DEFAULT_GLOW_COLOR = '132, 0, 255';

const BentoCard = ({
  card,
  glowColor = DEFAULT_GLOW_COLOR
}: {
  card: BentoCardProps;
  glowColor?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || window.innerWidth < 768) return; // Disable tilt on mobile for performance

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      gsap.to(el, {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: 'power3.out',
        transformPerspective: 1500
      });

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          x: ((x - centerX) / centerX) * 12,
          y: ((y - centerY) / centerY) * 12,
          duration: 0.6,
          ease: 'power3.out'
        });
      }

      el.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
      el.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
      el.style.setProperty('--glow-intensity', '1');
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.75)'
      });

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power4.out'
        });
      }

      el.style.setProperty('--glow-intensity', '0');
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`bento-card group relative h-full rounded-[24px] md:rounded-[48px] overflow-hidden bg-[#030305] border border-white/[0.03] transition-all duration-700 hover:border-white/20 ${card.className || ''}`}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      {/* Background Section */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden rounded-inherit">
        {card.image ? (
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover grayscale opacity-60 contrast-[1.1] brightness-[0.85] md:brightness-90 transition-all duration-[1200ms] ease-expo group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:brightness-105 group-hover:contrast-100"
          />
        ) : (
          <div className="w-full h-full bg-[#08080a]" />
        )}

        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Refined subtle gradient for text readability without washing out the image */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#030005]/90 via-[#030005]/20 to-transparent transition-opacity duration-700"
          style={{ backgroundSize: '100% 100%', backgroundPosition: 'bottom' }} />
      </div>

      {/* Interactive Spotlight (Disabled on mobile by CSS) */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none hidden md:block"
        style={{
          background: `radial-gradient(1000px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(${glowColor}, calc(var(--glow-intensity, 0) * 0.15)) 0%, transparent 60%)`,
        }}
      />

      {/* Border Inner Highlight */}
      <div className="absolute inset-0 z-[3] rounded-inherit shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.05)] md:group-hover:shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.2)] transition-all duration-700 pointer-events-none" />

      {/* Dynamic Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 lg:p-14"
        style={{ transform: window.innerWidth >= 768 ? 'translateZ(80px)' : 'none' }}
      >
        <div className="space-y-3 md:space-y-5">
          {card.label && (
            <div className="overflow-hidden">
              <span className="inline-block text-[9px] md:text-[11px] font-black tracking-[0.4em] uppercase text-primary translate-y-full md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[800ms] ease-expo">
                {card.label}
              </span>
            </div>
          )}

          <div className="overflow-hidden">
            <h3 className="text-2xl md:text-5xl font-bold text-white leading-[0.95] tracking-tight translate-y-full md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[900ms] delay-75 ease-expo">
              {card.title}
            </h3>
          </div>

          {card.description && (
            <div className="overflow-hidden hidden md:block">
              <p className="text-lg text-white/40 font-medium leading-relaxed max-w-[85%] translate-y-full group-hover:translate-y-0 transition-all duration-[1000ms] delay-150 ease-expo">
                {card.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const MagicBento: React.FC<MagicBentoProps> = ({
  cards,
  gridClassName = '',
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  return (
    <div className={`grid gap-4 md:gap-8 w-full ${gridClassName}`}>
      {cards.map((card, index) => (
        <BentoCard key={index} card={card} glowColor={glowColor} />
      ))}
    </div>
  );
};

export default MagicBento;

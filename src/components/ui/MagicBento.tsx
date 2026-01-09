import React from 'react';

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  image?: string;
  className?: string;
  aspectRatio?: string;
  objectPosition?: string;
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
  return (
    <div
      className={`bento-card group relative h-full overflow-hidden bg-black border border-white/5 transition-colors duration-500 hover:border-white/20 ${card.className || ''}`}
      style={{
        borderRadius: 'var(--radius)',
        paddingBottom: card.aspectRatio || undefined,
        height: card.aspectRatio ? '0' : '100%',
      }}
    >
      {/* Background Section with Visual Polish */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden rounded-inherit">
        {card.image ? (
          <div className="relative w-full h-full">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover grayscale brightness-75 contrast-[1.1] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
              style={{ objectPosition: card.objectPosition || 'center' }}
            />
            {/* Soft Edge Vignette / Inner Shadow */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] pointer-events-none" />
          </div>
        ) : (
          <div className="w-full h-full bg-[#08080a]" />
        )}

        {/* Gradient for Readability */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 z-[1] bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
      </div>

      {/* Subtle Glow Overlay */}
      <div
        className="absolute inset-0 z-[2] opacity-0 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, rgba(${glowColor}, 0.15) 0%, transparent 70%)`
        }}
      />

      {/* Dynamic Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end items-center text-center p-6 md:p-8">
        <div className="space-y-1 md:space-y-2">
          {card.label && (
            <span className="block label-uppercase !text-[9px] !text-primary/70">
              {card.label}
            </span>
          )}

          <h3 className="text-base md:text-lg lg:text-xl font-bold text-white leading-tight tracking-tight">
            {card.title}
          </h3>

          {card.description && (
            <p className="text-xs md:text-sm text-white/40 font-medium leading-relaxed max-w-[90%] mx-auto">
              {card.description}
            </p>
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

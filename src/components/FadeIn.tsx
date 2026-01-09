import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  framerProps?: any;
  staggerChildren?: number;
  viewMargin?: string;
  blur?: boolean;
  scale?: boolean;
}

export const FadeIn = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  staggerChildren = 0,
  viewMargin = '-100px',
  blur = false,
  scale = false,
  framerProps = {}
}: FadeInProps) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {}
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
    ...(blur ? { filter: 'blur(10px)' } : {}),
    ...(scale ? { scale: 0.95 } : {}),
    ...framerProps.initial
  };

  const whileInView = {
    opacity: 1,
    x: 0,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    ...framerProps.whileInView
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: '-50px' }} // Trigger sooner for better UX
      transition={{
        duration: 0.7, // Slightly faster for efficiency
        ease: [0.22, 1, 0.36, 1], // Smother quint out
        delay: delay / 1000,
        staggerChildren: staggerChildren / 1000,
        ...framerProps.transition
      }}
    >
      {children}
    </motion.div>
  );
};

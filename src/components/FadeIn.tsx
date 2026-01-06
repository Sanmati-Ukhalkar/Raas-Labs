import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn = ({ children, delay = 0, className = '' }: FadeInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1], // cubic-bezier(0.25, 1, 0.5, 1) equivalent
        delay: delay / 1000 // framer-motion uses seconds
      }}
    >
      {children}
    </motion.div>
  );
};

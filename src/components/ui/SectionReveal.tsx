import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface SectionRevealProps {
    children: ReactNode;
    className?: string;
    index?: number;
}

export const SectionReveal = ({ children, className = '', index = 0 }: SectionRevealProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Cascade/Revealing scale and opacity
    const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.92, 1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
    const y = useTransform(scrollYProgress, [0, 0.4, 1], [100, 0, 0]);
    const blur = useTransform(scrollYProgress, [0, 0.3, 1], [10, 0, 0]);

    return (
        <motion.div
            ref={containerRef}
            style={{
                scale,
                opacity,
                y,
                filter: `blur(${blur}px)`,
                willChange: 'transform, opacity, filter'
            }}
            className={`relative ${className}`}
        >
            {children}
        </motion.div>
    );
};

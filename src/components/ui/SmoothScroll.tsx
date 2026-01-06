import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

interface SmoothScrollProps {
    children: ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1.1,
            touchMultiplier: 1.5,
            infinite: false,
        });

        // raf loop
        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId);
        };
    }, []);

    return <>{children}</>;
};

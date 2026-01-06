import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface InfiniteLogoTickerProps {
    logos: { src: string; alt: string }[];
    speed?: number; // relative speed
    logoHeight?: number;
    gap?: number;
    className?: string;
    pauseOnHover?: boolean;
}

export const InfiniteLogoTicker = ({
    logos,
    speed = 1,
    logoHeight = 50,
    gap = 60,
    className = '',
    pauseOnHover = true,
}: InfiniteLogoTickerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

    useLayoutEffect(() => {
        if (!containerRef.current || !trackRef.current) return;

        const ctx = gsap.context(() => {
            const track = trackRef.current!;

            // Calculate total width of one set of logos
            // Since we render 3 copies, totalWidth is scrollWidth / 3
            const totalWidth = track.scrollWidth / 3;

            const loop = gsap.to(track, {
                x: `-=${totalWidth}`,
                duration: 25 / speed,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
                }
            });

            timelineRef.current = loop;
        }, containerRef);

        return () => ctx.revert();
    }, [logos, speed, gap]);

    const handleMouseEnter = () => {
        if (pauseOnHover && timelineRef.current) {
            gsap.to(timelineRef.current, { timeScale: 0, duration: 0.5, ease: "power2.out" });
        }
    };

    const handleMouseLeave = () => {
        if (pauseOnHover && timelineRef.current) {
            gsap.to(timelineRef.current, { timeScale: 1, duration: 0.5, ease: "power2.in" });
        }
    };

    return (
        <div
            ref={containerRef}
            className={`relative w-full overflow-hidden select-none ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={trackRef}
                className="flex items-center w-max"
                style={{ gap: `${gap}px`, paddingRight: `${gap}px` }}
            >
                {/* Render logos 3 times for seamless loop */}
                {[...logos, ...logos, ...logos].map((logo, index) => (
                    <div
                        key={`${logo.alt}-${index}`}
                        className="flex-shrink-0 flex items-center justify-center"
                        style={{ height: `${logoHeight}px` }}
                    >
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="h-full w-auto object-contain block pointer-events-none"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

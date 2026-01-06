import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const SiteLoader: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if loader has already run in this session
        const hasLoaded = sessionStorage.getItem('site-loaded');
        if (hasLoaded) {
            setIsVisible(false);
            return;
        }

        const tl = gsap.timeline({
            onComplete: () => {
                setIsVisible(false);
                sessionStorage.setItem('site-loaded', 'true');
            }
        });

        // Initial state
        gsap.set(textRef.current, { opacity: 0, scale: 0.95 });

        tl.to(textRef.current, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power2.out',
            delay: 0.5
        })
            .to(textRef.current, {
                opacity: 0,
                scale: 1.05,
                duration: 1,
                ease: 'power2.inOut',
                delay: 1
            })
            .to(containerRef.current, {
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut'
            }, "-=0.5");

        return () => {
            tl.kill();
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#030014]"
            style={{ isolation: 'isolate' }}
        >
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-[#030014]"
            />
            <h1
                ref={textRef}
                className="relative z-10 text-white text-3xl md:text-5xl font-semibold tracking-tight select-none pointer-events-none"
            >
                The Increations
            </h1>
        </div>
    );
};

export default SiteLoader;

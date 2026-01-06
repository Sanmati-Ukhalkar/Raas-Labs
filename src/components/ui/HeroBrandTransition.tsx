import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroBrandTransition() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        const wrapper = wrapperRef.current;

        if (!container || !wrapper) return;

        // Add class to hide real navbar text initially
        document.body.classList.add('hide-nav-text');

        const ctx = gsap.context(() => {
            const heroElement = document.getElementById('hero');
            const mm = gsap.matchMedia();

            // Common ScrollTrigger Config
            // STRICT HERO ONLY BOUNDARY
            const scrollConfig = {
                trigger: heroElement, // Bind directly to the DOM element
                start: "top top",      // Start when hero top matches viewport top
                end: "bottom top",     // End when hero bottom matches viewport top
                scrub: 1,              // Heavy, controlled scrub
                invalidateOnRefresh: true, // Recalculate on resize
            };

            // Desktop Setup
            mm.add("(min-width: 768px)", () => {
                // Initial State: Monumental, Centered
                gsap.set(wrapper, {
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    xPercent: -50,
                    yPercent: -50,
                    scale: 7.5, // Monumental scale
                    autoAlpha: 1,
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    color: '#ffffff',
                    width: 'auto'
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        ...scrollConfig,
                        // Persist state - no toggling
                    }
                });

                tl.to(wrapper, {
                    top: '2.5rem', // Corrected Center (80px header / 2)
                    left: '50%', // Horizontal center of header
                    xPercent: -50, // Center alignment
                    yPercent: -50, // Center vertical
                    scale: 1,
                    fontWeight: 600,
                    duration: 1,
                    ease: "power2.inOut" // Heavy, gradual motion
                });
            });

            // Mobile Setup
            mm.add("(max-width: 767px)", () => {
                // Initial State: Bold, Centered, Strictly Within Width
                gsap.set(wrapper, {
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    xPercent: -50,
                    yPercent: -50,
                    scale: 1.8, // Reduced scale for absolute safety on small screens
                    autoAlpha: 1,
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    color: '#ffffff',
                    width: 'auto',
                    maxWidth: '90vw' // Hardcap width
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        ...scrollConfig,
                        // Persist state - no toggling
                    }
                });

                tl.to(wrapper, {
                    top: '2.5rem', // Match header height
                    left: '50%',
                    xPercent: -50,
                    yPercent: -50,
                    scale: 0.9, // Slightly smaller for mobile navbar
                    fontWeight: 600,
                    duration: 1,
                    ease: "power2.inOut"
                });
            });

        }, containerRef);

        return () => {
            ctx.revert();
            document.body.classList.remove('hide-nav-text');
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[60]">
            <style>{`
          /* Force real navbar text to be centered independent of logo */
          .sm-logo span {
             position: absolute;
             left: 50%;
             top: 50%;
             transform: translate(-50%, -50%);
             width: max-content;
             pointer-events: none; /* Let clicks pass to header if needed, but visually centered */
          }
          
          /* Hide real navbar text while HeroBrandTransition is active (persists after scroll) */
          .hide-nav-text .sm-logo span {
             opacity: 0 !important;
             visibility: hidden;
          }
       `}</style>
            {/* The Text Element */}
            <div ref={wrapperRef} className="absolute whitespace-nowrap text-white pointer-events-none origin-center">
                <span ref={textRef} className="text-[17px] font-extrabold tracking-tight leading-none">
                    The Increations
                </span>
            </div>
        </div>
    );
}

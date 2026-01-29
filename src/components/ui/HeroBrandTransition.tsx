import { useRef, useLayoutEffect } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Share2, BarChart3, Users, Video, Award, Hexagon, Circle, Square, Triangle, Sparkles, Zap } from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

const SUPPORTING_ICONS = [
    // Original Signal Icons
    { Icon: Share2, desktop: { top: '15%', left: '10%' }, mobile: { top: '15%', left: '10%' }, type: 'signal' },
    { Icon: Video, desktop: { top: '25%', right: '12%' }, mobile: { top: '35%', right: '8%' }, type: 'signal' },
    { Icon: BarChart3, desktop: { bottom: '25%', left: '15%' }, mobile: { bottom: '25%', left: '12%' }, type: 'signal' },
    { Icon: Users, desktop: { bottom: '18%', right: '10%' }, mobile: null, type: 'signal' },
    { Icon: Award, desktop: { top: '45%', right: '8%' }, mobile: null, type: 'signal' },

    // Anchor Icons (Near Brand)
    { Icon: Square, desktop: { top: '38%', left: '38%' }, mobile: { top: '42%', left: '35%' }, type: 'anchor' },
    { Icon: Circle, desktop: { top: '38%', right: '38%' }, mobile: { top: '42%', right: '35%' }, type: 'anchor' },
    { Icon: Triangle, desktop: { bottom: '38%', left: '38%' }, mobile: null, type: 'anchor' },
    { Icon: Hexagon, desktop: { bottom: '38%', right: '38%' }, mobile: null, type: 'anchor' },

    // Floating Icons (Periphery)
    { Icon: Sparkles, desktop: { top: '65%', left: '20%' }, mobile: null, type: 'floating' },
    { Icon: Zap, desktop: { top: '12%', right: '25%' }, mobile: null, type: 'floating' },
];

export default function HeroBrandTransition() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const microTextRef = useRef<HTMLDivElement>(null);
    const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
    const plusRefs = useRef<(HTMLDivElement | null)[]>([]);

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
                }, 0);

                // Supporting Elements Animation
                tl.to(microTextRef.current, {
                    autoAlpha: 0,
                    y: -20,
                    duration: 0.4,
                    ease: "power2.in"
                }, 0);

                iconsRef.current.forEach((icon, i) => {
                    if (!icon) return;
                    const data = SUPPORTING_ICONS[i];
                    // Outward translation logic
                    const xDir = data.desktop?.left ? -1 : 1;
                    const yDir = data.desktop?.top ? -1 : 1;

                    tl.to(icon, {
                        autoAlpha: 0,
                        x: 80 * xDir,
                        y: 80 * yDir,
                        scale: 0.6,
                        duration: 0.85,
                        ease: "power2.in"
                    }, 0);
                });

                tl.to(plusRefs.current, {
                    autoAlpha: 0,
                    duration: 0.5,
                    ease: "power2.in"
                }, 0);

                // Subtle background parallax via hero section
                const heroBg = document.querySelector('#hero .z-0');
                if (heroBg) {
                    tl.to(heroBg, {
                        y: 100,
                        scale: 1.1,
                        duration: 1,
                        ease: "none"
                    }, 0);
                }
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
                }, 0);

                tl.to(microTextRef.current, {
                    autoAlpha: 0,
                    y: -10,
                    duration: 0.3,
                    ease: "power2.in"
                }, 0);

                iconsRef.current.forEach((icon, i) => {
                    if (!icon) return;
                    tl.to(icon, {
                        autoAlpha: 0,
                        y: -30,
                        duration: 0.6,
                        ease: "power2.in"
                    }, 0);
                });
                tl.to(plusRefs.current, {
                    autoAlpha: 0,
                    duration: 0.4,
                    ease: "power2.in"
                }, 0);
            });

        }, containerRef);

        return () => {
            ctx.revert();
            document.body.classList.remove('hide-nav-text');
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[60] hero-brand-container">
            <style>{`
          /* Force real navbar text to be centered independent of logo */
          .sm-logo span {
             position: absolute;
             left: 50%;
             top: 50%;
             transform: translate(-50%, -50%);
             width: max-content;
             pointer-events: none;
          }
          
          /* Hide real navbar text while HeroBrandTransition is active */
          .hide-nav-text .sm-logo span {
             opacity: 0 !important;
             visibility: hidden;
          }
       `}</style>

            {/* Supporting Icons - Lower Z-Index */}
            <div className="absolute inset-0 z-10">
                {SUPPORTING_ICONS.map(({ Icon, desktop, mobile, type }, i) => (
                    <motion.div
                        key={i}
                        ref={el => iconsRef.current[i] = el}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: type === 'floating' ? 0.06 : 0.1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.8 + (i * 0.05), ease: "easeOut" }}
                        className={`absolute text-purple-400 pointer-events-none
                            ${!desktop ? 'hidden' : 'md:block'}
                            ${!mobile ? 'hidden' : 'block md:hidden'}`}
                        style={{
                            ...(desktop && typeof window !== 'undefined' && window.innerWidth >= 768 ? desktop : {}),
                            ...(mobile && typeof window !== 'undefined' && window.innerWidth < 768 ? mobile : {}),
                            filter: type === 'floating' ? 'blur(2px)' : 'blur(0.5px)',
                        }}
                    >
                        <Icon
                            size={type === 'floating' ? 32 : (typeof window !== 'undefined' && window.innerWidth >= 768 ? 48 : 36)}
                            strokeWidth={1}
                        />
                    </motion.div>
                ))}

                {/* Decorative Corner Plus Symbols */}
                {[
                    { top: '15%', left: '15%' },
                    { top: '15%', right: '15%' },
                    { bottom: '15%', left: '15%' },
                    { bottom: '15%', right: '15%' }
                ].map((pos, i) => (
                    <motion.div
                        key={`plus-${i}`}
                        ref={el => plusRefs.current[i] = el}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 + (i * 0.1), ease: "easeOut" }}
                        className="absolute text-primary/60 font-extralight pointer-events-none select-none text-4xl md:text-6xl"
                        style={{ ...pos }}
                    >
                        +
                    </motion.div>
                ))}
            </div>

            {/* Primary Text Layer - High Z-Index */}
            <div ref={wrapperRef} className="absolute flex flex-col items-center whitespace-nowrap text-white pointer-events-none origin-center z-20">
                <h1 className="text-[18px] font-black tracking-tighter leading-none">
                    RAAS Labs
                </h1>

                {/* Micro Text Enrichment */}
                <motion.div
                    ref={microTextRef}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                    className="mt-[0.1em] font-medium tracking-[0.3em] uppercase"
                    style={{ fontSize: '3px' }}
                >
                    EXECUTION · PRODUCTION · SCALE
                </motion.div>
            </div>
        </div>
    );
};

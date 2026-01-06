import React, { useCallback, useEffect, useMemo, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export type LogoItem =
  | {
    node: React.ReactNode;
    href?: string;
    title?: string;
    ariaLabel?: string;
  }
  | {
    src: string;
    alt?: string;
    href?: string;
    title?: string;
    srcSet?: string;
    sizes?: string;
    width?: number;
    height?: number;
  };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: React.Key) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 3, // Increased for safety
  COPY_HEADROOM: 3 // Increased for safety
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === 'number' ? `${value}px` : (value ?? undefined);

const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ');

const useResizeObserver = (
  callback: () => void,
  elements: Array<React.RefObject<Element | null>>,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, dependencies);
};

const useImageLoader = (
  seqRef: React.RefObject<HTMLUListElement | null>,
  onLoad: () => void,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) {
        onLoad();
      }
    };

    images.forEach(img => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener('load', handleImageLoad, { once: true });
        htmlImg.addEventListener('error', handleImageLoad, { once: true });
      }
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, dependencies);
};

// Marquee helper based on GSAP's seamless loop approach
const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  isHovered: boolean,
  hoverSpeed: number | undefined,
  isVertical: boolean
) => {
  const loopRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const items = gsap.utils.toArray(track.children[0].children) as HTMLElement[];
    if (items.length === 0) return;

    // Helper function to create seamless marquee
    const horizontalLoop = (items: HTMLElement[], config: any) => {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => { tl.totalTime(tl.rawTime() + tl.duration() * 100); } }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1),
        snap = config.snap === false ? (v: any) => v : gsap.utils.snap(config.snap || 1),
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;

      gsap.set(items, {
        xPercent: 0
      });

      for (i = 0; i < length; i++) {
        item = items[i];
        curX = item.offsetLeft - startX;
        xPercents[i] = snap(parseFloat(gsap.getProperty(item, "xPercent") as string) + curX / item.offsetWidth * 100);
        widths[i] = item.offsetWidth;
      }

      totalWidth = items[length - 1].offsetLeft + (xPercents[length - 1] as number) / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * (gsap.getProperty(items[length - 1], "scaleX") as number) + (parseFloat(config.paddingRight) || 0);

      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] as number) / 100 * widths[i];
        distanceToStart = item.offsetLeft - startX;
        distanceToLoop = distanceToStart + widths[i];
        tl.to(item, { xPercent: snap((curX - totalWidth) / widths[i] * 100), duration: totalWidth / pixelsPerSecond }, 0)
          .fromTo(item, { xPercent: snap(curX / widths[i] * 100) }, { xPercent: snap((curX - totalWidth) / widths[i] * 100), immediateRender: false, duration: totalWidth / pixelsPerSecond }, totalWidth / pixelsPerSecond)
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }

      function toIndex(index: number, vars: any) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.animate(time, vars);
      }

      tl.next = (vars: any) => toIndex(curIndex + 1, vars);
      tl.prev = (vars: any) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index: number, vars: any) => toIndex(index, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true);
      if (config.reversed) {
        tl.vars.onReverseComplete?.();
        tl.reverse();
      }
      return tl;
    };

    const gap = parseFloat(getComputedStyle(track.children[0]).getPropertyValue('gap')) || 0;

    loopRef.current = horizontalLoop(gsap.utils.toArray(track.children[0].children), {
      repeat: -1,
      speed: Math.abs(targetVelocity),
      paddingRight: gap,
      reversed: targetVelocity < 0
    });

    return () => {
      if (loopRef.current) {
        loopRef.current.kill();
        loopRef.current = null;
      }
    };
  }, [targetVelocity, isVertical]);

  useEffect(() => {
    if (!loopRef.current) return;

    const targetScale = isHovered && hoverSpeed !== undefined
      ? hoverSpeed / Math.abs(targetVelocity)
      : 1;

    gsap.to(loopRef.current, {
      timeScale: targetScale,
      duration: 0.6,
      ease: 'power2.out'
    });
  }, [isHovered, hoverSpeed, targetVelocity]);
};

export const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = 'Partner logos',
    className,
    style
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLUListElement>(null);

    const [seqWidth, setSeqWidth] = useState<number>(0);
    const [seqHeight, setSeqHeight] = useState<number>(0);
    const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const effectiveHoverSpeed = useMemo(() => {
      if (hoverSpeed !== undefined) return hoverSpeed;
      if (pauseOnHover === true) return 0;
      return undefined;
    }, [hoverSpeed, pauseOnHover]);

    const isVertical = direction === 'up' || direction === 'down';

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      let directionMultiplier: number;
      if (isVertical) {
        directionMultiplier = direction === 'up' ? 1 : -1;
      } else {
        directionMultiplier = direction === 'left' ? 1 : -1;
      }
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction, isVertical]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceRect = seqRef.current?.getBoundingClientRect?.();
      const sequenceWidth = sequenceRect?.width ?? 0;
      const sequenceHeight = sequenceRect?.height ?? 0;
      if (isVertical) {
        const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 0;
        if (containerRef.current && parentHeight > 0) {
          const targetHeight = Math.ceil(parentHeight);
          if (containerRef.current.style.height !== `${targetHeight}px`)
            containerRef.current.style.height = `${targetHeight}px`;
        }
        if (sequenceHeight > 0) {
          setSeqHeight(Math.ceil(sequenceHeight));
          const viewport = containerRef.current?.clientHeight ?? parentHeight ?? sequenceHeight;
          const copiesNeeded = Math.ceil(viewport / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM;
          setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
        }
      } else if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, [isVertical]);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight, isVertical]);

    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight, isVertical]);

    useAnimationLoop(trackRef, targetVelocity, isHovered, effectiveHoverSpeed, isVertical);

    const cssVariables = useMemo(
      () =>
        ({
          '--logoloop-gap': `${gap}px`,
          '--logoloop-logoHeight': `${logoHeight}px`,
          ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
        }) as React.CSSProperties,
      [gap, logoHeight, fadeOutColor]
    );

    const rootClasses = useMemo(
      () =>
        cx(
          'relative group',
          isVertical ? 'overflow-hidden h-full inline-block' : 'overflow-x-hidden',
          '[--logoloop-gap:32px]',
          '[--logoloop-logoHeight:28px]',
          '[--logoloop-fadeColorAuto:#ffffff]',
          'dark:[--logoloop-fadeColorAuto:#0b0b0b]',
          scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
          className
        ),
      [isVertical, scaleOnHover, className]
    );

    const handleMouseEnter = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(true);
    }, [effectiveHoverSpeed]);
    const handleMouseLeave = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(false);
    }, [effectiveHoverSpeed]);

    const renderLogoItem = useCallback(
      (item: LogoItem, key: React.Key) => {
        if (renderItem) {
          return (
            <li
              className={cx(
                'flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]',
                isVertical ? 'mb-[var(--logoloop-gap)]' : 'mr-[var(--logoloop-gap)]',
                scaleOnHover && 'overflow-visible group/item'
              )}
              key={key}
              role="listitem"
            >
              {renderItem(item, key)}
            </li>
          );
        }

        const isNodeItem = 'node' in item;

        const content = isNodeItem ? (
          <span
            className={cx(
              'inline-flex items-center',
              'motion-reduce:transition-none',
              scaleOnHover &&
              'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
            )}
            aria-hidden={!!(item as any).href && !(item as any).ariaLabel}
          >
            {(item as any).node}
          </span>
        ) : (
          <img
            className={cx(
              'h-[var(--logoloop-logoHeight)] w-auto block object-contain',
              '[-webkit-user-drag:none] pointer-events-none',
              '[image-rendering:-webkit-optimize-contrast]',
              'motion-reduce:transition-none',
              scaleOnHover &&
              'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
            )}
            src={(item as any).src}
            srcSet={(item as any).srcSet}
            sizes={(item as any).sizes}
            width={(item as any).width}
            height={(item as any).height}
            alt={(item as any).alt ?? ''}
            title={(item as any).title}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        );

        const itemAriaLabel = isNodeItem
          ? ((item as any).ariaLabel ?? (item as any).title)
          : ((item as any).alt ?? (item as any).title);

        const inner = (item as any).href ? (
          <a
            className={cx(
              'inline-flex items-center no-underline rounded',
              'transition-opacity duration-200 ease-linear',
              'hover:opacity-80',
              'focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2'
            )}
            href={(item as any).href}
            aria-label={itemAriaLabel || 'logo link'}
            target="_blank"
            rel="noreferrer noopener"
          >
            {content}
          </a>
        ) : (
          content
        );

        return (
          <li
            className={cx(
              'flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]',
              isVertical ? 'mb-[var(--logoloop-gap)]' : 'mr-[var(--logoloop-gap)]',
              scaleOnHover && 'overflow-visible group/item'
            )}
            key={key}
            role="listitem"
          >
            {inner}
          </li>
        );
      },
      [isVertical, scaleOnHover, renderItem]
    );

    const logoLists = useMemo(
      () => (
        <ul
          className={cx('flex items-center', isVertical && 'flex-col')}
          style={{ gap: `${gap}px` }}
          role="list"
          ref={seqRef}
        >
          {logos.map((item, itemIndex) => renderLogoItem(item, `logo-${itemIndex}`))}
        </ul>
      ),
      [logos, renderLogoItem, isVertical, gap]
    );

    const containerStyle = useMemo(
      (): React.CSSProperties => ({
        width: isVertical
          ? toCssLength(width) === '100%'
            ? undefined
            : toCssLength(width)
          : (toCssLength(width) ?? '100%'),
        ...cssVariables,
        ...style
      }),
      [width, cssVariables, style, isVertical]
    );

    return (
      <div
        ref={containerRef}
        className={rootClasses}
        style={containerStyle}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {fadeOut && (
          <>
            {isVertical ? (
              <>
                <div
                  aria-hidden
                  className={cx(
                    'pointer-events-none absolute inset-x-0 top-0 z-10',
                    'h-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_bottom,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  )}
                />
                <div
                  aria-hidden
                  className={cx(
                    'pointer-events-none absolute inset-x-0 bottom-0 z-10',
                    'h-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_top,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  )}
                />
              </>
            ) : (
              <>
                <div
                  aria-hidden
                  className={cx(
                    'pointer-events-none absolute inset-y-0 left-0 z-10',
                    'w-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  )}
                />
                <div
                  aria-hidden
                  className={cx(
                    'pointer-events-none absolute inset-y-0 right-0 z-10',
                    'w-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  )}
                />
              </>
            )}
          </>
        )}

        <div
          className={cx(
            'flex will-change-transform select-none relative z-0',
            'motion-reduce:transform-none',
            isVertical ? 'flex-col h-max w-full' : 'flex-row w-max'
          )}
          ref={trackRef}
        >
          {logoLists}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;

import { useRef, useEffect, useState, ReactNode } from 'react';

interface HorizontalScrollerProps {
  children: ReactNode;
  autoScrollSpeed?: number; // pixels per second
  className?: string;
}

export const HorizontalScroller = ({ 
  children, 
  autoScrollSpeed = 30,
  className = '' 
}: HorizontalScrollerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const animationRef = useRef<number>();
  const lastTime = useRef<number>(0);

  // Intersection observer for viewport detection
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isInView || isHovered || isDragging) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const animate = (currentTime: number) => {
      if (lastTime.current === 0) {
        lastTime.current = currentTime;
      }
      
      const deltaTime = (currentTime - lastTime.current) / 1000;
      lastTime.current = currentTime;
      
      container.scrollLeft += autoScrollSpeed * deltaTime;
      
      // Reset to start when reaching end
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    lastTime.current = 0;
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, isHovered, isDragging, autoScrollSpeed]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    
    setIsDragging(true);
    dragStart.current = {
      x: e.pageX - container.offsetLeft,
      scrollLeft: container.scrollLeft,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const container = containerRef.current;
    if (!container) return;
    
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - dragStart.current.x) * 1.5;
    container.scrollLeft = dragStart.current.scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ 
        scrollBehavior: isDragging ? 'auto' : 'smooth',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <div className="flex gap-6 w-max px-6 lg:px-24 py-4">
        {children}
      </div>
    </div>
  );
};

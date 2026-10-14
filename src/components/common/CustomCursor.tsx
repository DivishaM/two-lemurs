import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers and motion allowed
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hasFinePointer || isReduced) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Ensure ring is strictly empty
    ring.textContent = '';
    ring.innerHTML = '';

    // quickTo for high performance 60/120fps tracking
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.1 });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.1 });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });

    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);

      if (!isVisible) {
        isVisible = true;
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Guarantee no text ever exists inside cursor
      if (ring.textContent) {
        ring.textContent = '';
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, [role="button"], input, textarea, select, .interactive-card, [data-interactive]'
      );

      if (isInteractive) {
        gsap.to(ring, {
          scale: 1.6,
          backgroundColor: 'rgba(30, 96, 242, 0.08)',
          borderColor: 'rgba(30, 96, 242, 0.8)',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(dot, { opacity: 0.4, scale: 0.6, duration: 0.2 });
      } else {
        gsap.to(ring, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(30, 96, 242, 0.45)',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(dot, { opacity: 1, scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9998] opacity-0 will-change-transform hidden [@media(hover:hover)_and_(pointer:fine)]:block"
      />
      <div
        ref={ringRef}
        key="cursor-ring-clean"
        className="fixed top-0 left-0 -ml-[19px] -mt-[19px] w-[38px] h-[38px] rounded-full border-[1.5px] border-primary/50 pointer-events-none z-[9997] opacity-0 will-change-transform hidden [@media(hover:hover)_and_(pointer:fine)]:block"
      />
    </>
  );
};

export default CustomCursor;


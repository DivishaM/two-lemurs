import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollProgressBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isReduced) {
      const tween = gsap.to(barRef.current, {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: 'max',
          scrub: 0.3,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    } else {
      const handleScroll = () => {
        if (!barRef.current) return;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
        barRef.current.style.width = `${progress}%`;
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div
      ref={barRef}
      id="bar"
      className="fixed left-0 top-0 h-[3px] w-0 z-[100] bg-gradient-to-r from-primary via-sky-400 to-indigo-500 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ScrollProgressBar;

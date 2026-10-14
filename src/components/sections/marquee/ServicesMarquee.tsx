import { useEffect, useRef } from 'react';
import MarqueeItem from './MarqueeItem';
import { servicesData } from '../../../data/servicesData';
import { useSmoothScroll } from '../../../context/SmoothScrollContext';
import gsap from 'gsap';

export default function ServicesMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced || !lenis || !trackRef.current) return;

    const track = trackRef.current;
    const onScroll = (e: { velocity: number }) => {
      const skew = Math.max(-6, Math.min(6, e.velocity * 0.22));
      gsap.to(track, { skewX: skew, duration: 0.25, overwrite: 'auto' });
      gsap.to(track, {
        skewX: 0,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    lenis.on('scroll', onScroll);
    return () => {
      lenis.off('scroll', onScroll);
    };
  }, [lenis]);

  return (
    <section
      className="overflow-hidden bg-typography-dark lg:py-7 py-6 draggable-area cursor-grab active:cursor-grabbing select-none"
      data-draggable="true"
    >
      <div
        ref={trackRef}
        className="flex w-max animate-marquee items-center gap-9 px-20 will-change-transform hover:[animation-play-state:paused]"
      >
        {[...servicesData, ...servicesData, ...servicesData].map((service, index) => (
          <MarqueeItem key={`${service}-${index}`} title={service} />
        ))}
      </div>
    </section>
  );
}

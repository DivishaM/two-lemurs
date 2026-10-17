import { useEffect, useRef } from 'react';
import { clients } from '../../data/clients';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const marqueeClients = [...clients, ...clients, ...clients, ...clients];

export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    // Staggered words entrance for heading
    if (titleRef.current && sectionRef.current) {
      const words = titleRef.current.querySelectorAll('.word-inner');
      if (words.length > 0) {
        gsap.fromTo(
          words,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.05,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }

    // Velocity-based Skew on scroll
    if (lenis && trackRef.current) {
      const track = trackRef.current;
      const onScroll = (e: { velocity: number }) => {
        const skew = Math.max(-5, Math.min(5, -e.velocity * 0.2));
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
    }
  }, [lenis]);

  const words = ['Clients', 'We', 'Worked', 'For'];

  return (
    <section
      ref={sectionRef}
      className="bg-dark py-8 sm:py-0 sm:h-[240px] flex flex-col justify-center overflow-hidden"
    >
      <h2 ref={titleRef} className="gothic-700 mb-8 sm:mb-7 text-center text-[28px] text-white">
        {words.map((word, i) => (
          <span key={i} className="word-mask mr-[0.22em] last:mr-0 inline-block overflow-hidden">
            <span className="word-inner inline-block will-change-transform">
              {word}
            </span>
          </span>
        ))}
      </h2>

      <div
        className="relative w-full flex items-center overflow-hidden sm:h-[120px] select-none"
      >
        {/* Left & Right Smooth Edge Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-28 bg-gradient-to-r from-dark to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-28 bg-gradient-to-l from-dark to-transparent" />

        <div
          ref={trackRef}
          className="flex w-max animate-marquee gap-2.5 sm:gap-3 transition-transform will-change-transform hover:[animation-play-state:paused]"
        >
          {marqueeClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="client-tile group flex h-[60px] w-[120px] sm:h-[100px] sm:w-[200px] flex-shrink-0 items-center justify-center border border-white/5 bg-dark-card px-3 sm:px-4 transition-all duration-300 hover:border-white/20 cursor-pointer"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo - Client of Two Lemurs`}
                width={142}
                height={80}
                loading="lazy"
                decoding="async"
                className="max-h-[38px] max-w-[84px] sm:max-h-[80px] sm:max-w-[142px] w-auto h-auto object-contain opacity-75 brightness-100 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:brightness-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useEffect, useRef } from 'react';
import { servicesData } from '../../../data/services';
import { ServiceCard } from './ServiceCard';
import { Button } from '../../common/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // Word reveal for heading
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.word-inner');
        gsap.fromTo(
          words,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 82%',
            },
          }
        );
      }

      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 82%',
            },
          }
        );
      }

      // Right cards cascade
      if (rightColRef.current && sectionRef.current) {
        const cards = rightColRef.current.querySelectorAll('.service-card');
        gsap.fromTo(
          cards,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightColRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingWords = ['Services', 'That', 'Make', 'an', 'Impact'];

  return (
    <section ref={sectionRef} id="services" className="bg-white py-16 sm:py-20 lg:py-[136px]">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left lg:sticky lg:top-48">
          <h2
            ref={titleRef}
            className="gothic-800 text-[28px] sm:text-4xl lg:text-5xl text-typography-main leading-tight"
          >
            {headingWords.map((word, i) => (
              <span key={i} className="word-mask mr-[0.24em] last:mr-0 inline-block overflow-hidden">
                <span className="word-inner inline-block will-change-transform">{word}</span>
              </span>
            ))}
          </h2>

          <p
            ref={descRef}
            className="avenir-500 text-slate-600 text-sm sm:text-lg mt-4 max-w-md"
          >
            From brand identity to websites, we help growing businesses build a clear, consistent presence.
          </p>

          <div className="avenir-500 mt-6">
            <Button
              href="#portfolio"
              label="View our work"
              variant="secondary"
              icon="arrow-down-right"
              size="md"
              className="h-12 w-[170px]"
            />
          </div>
        </div>

        <div ref={rightColRef} className="lg:col-span-7 flex flex-col gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
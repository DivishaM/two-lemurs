import { useEffect, useRef } from 'react';
import Button from '../../common/Button';
import ProcessStep from './ProcessStep';
import { processData } from '../../../data/processData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // Heading word reveal
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

      // Process cards cascade
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.process-card');
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // CTA Banner entrance
      if (bannerRef.current) {
        gsap.fromTo(
          bannerRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bannerRef.current,
              start: 'top 92%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="bg-white py-12 md:py-20 xl:py-32">
      <div className="container">
        {/* Section Heading */}
        <div className="mb-10 grid lg:gap-6 gap-4 md:grid-cols-2 md:items-end lg:mb-12">
          <h2
            ref={titleRef}
            className="font-extrabold text-typography-dark lg:text-5xl lg:leading-[56px] md:text-4xl md:leading-[44px] text-[28px] leading-9"
          >
            <span className="word-mask mr-[0.22em] inline-block overflow-hidden">
              <span className="word-inner inline-block will-change-transform">From</span>
            </span>
            <span className="word-mask inline-block overflow-hidden">
              <span className="word-inner inline-block will-change-transform">first</span>
            </span>
            <br />
            <span className="word-mask mr-[0.22em] inline-block overflow-hidden">
              <span className="word-inner inline-block will-change-transform">idea</span>
            </span>
            <span className="word-mask mr-[0.22em] inline-block overflow-hidden">
              <span className="word-inner inline-block will-change-transform">to</span>
            </span>
            <span className="word-mask mr-[0.22em] inline-block overflow-hidden">
              <span className="word-inner inline-block will-change-transform">final</span>
            </span>
            <span className="word-mask inline-block overflow-hidden">
              <span className="word-inner inline-block will-change-transform">launch.</span>
            </span>
          </h2>

          <p
            ref={descRef}
            className="text-sm font-medium leading-6 text-typography-dark md:text-lg md:justify-self-end"
          >
            A simple, focused process that keeps strategy,
            design and execution moving in the same direction.
          </p>
        </div>

        {/* Process Cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 border-r border-neutral-100 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processData.map((step) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </div>

        {/* CTA Banner */}
        <div
          ref={bannerRef}
          className="mt-5 flex flex-col gap-5 border border-neutral-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4"
        >
          <div>
            <p className="text-sm md:text-base font-normal leading-5 text-typography-light">
              Have a project in mind?
            </p>

            <p className="mt-1 text-base md:text-lg font-semibold leading-7 text-typography-dark">
              Let&apos;s talk about what&apos;s next.
            </p>
          </div>

          <Button
            href="#contact"
            label="Start a Project"
            variant="primary"
            size="lg"
            icon="arrow-up-right"
          />
        </div>
      </div>
    </section>
  );
}
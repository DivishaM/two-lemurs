import { useEffect, useRef } from 'react';
import Button from '../../common/Button';
import InsightCard from './InsightCard';
import { insightsData } from '../../../data/insightsData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InsightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      // Insight cards cascade + smooth image scale-in
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.insight-card');
        const images = gridRef.current.querySelectorAll('.insight-card-img');

        gsap.fromTo(
          cards,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
            },
          }
        );

        if (images.length > 0) {
          gsap.fromTo(
            images,
            { scale: 1.18, opacity: 0.75 },
            {
              scale: 1,
              opacity: 1,
              duration: 1.35,
              stagger: 0.12,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: gridRef.current,
                start: 'top 85%',
              },
              onComplete: () => {
                gsap.set(images, { clearProps: 'transform,opacity' });
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingWords = ['Explore', 'Our', 'Insights'];

  return (
    <section ref={sectionRef} className="bg-typography-offwhite py-12 md:py-20 xl:py-32">
      <div className="container">
        {/* Section Heading */}
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2
            ref={titleRef}
            className="font-extrabold text-typography-dark lg:text-5xl lg:leading-[56px] md:text-4xl md:leading-[44px] text-[28px] leading-9 gothic-800 md:text-left text-center mx-auto md:mx-0"
          >
            {headingWords.map((word, i) => (
              <span key={i} className="word-mask mr-[0.24em] last:mr-0 inline-block overflow-hidden">
                <span className="word-inner inline-block will-change-transform">{word}</span>
              </span>
            ))}
          </h2>

          <Button
            label="Full Insight"
            href="#contact"
            variant="dark"
            icon="arrow-up-right"
            size="lg"
            className="hidden md:block"
          />
        </div>

        {/* Insight Cards */}
        <div ref={gridRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insightsData.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            label="Full Insight"
            href="#contact"
            variant="dark"
            icon="arrow-up-right"
            size="lg"
            className="block md:hidden mx-auto mt-10"
          />
        </div>
      </div>
    </section>
  );
}

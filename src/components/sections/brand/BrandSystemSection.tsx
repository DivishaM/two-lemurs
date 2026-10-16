import { useEffect, useRef } from 'react';
// import { Download } from 'lucide-react';
import { brandProjects } from '../../../data/brandProjects';
import { BrandProjectCard } from './BrandProjectCard';
// import { Button } from '../../common/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BrandSystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

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
            duration: 0.95,
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
            duration: 0.85,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 82%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headingWords = ['What', 'a', 'complete', 'brand', 'system', 'looks', 'like'];

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="bg-dark py-16 sm:py-20 lg:py-[92px] text-white"
    >
      <div className="container">
        <div className="text-center w-full max-w-6xl mx-auto">
          <h2
            ref={titleRef}
            className="gothic-800 text-[28px] sm:text-4xl lg:text-5xl lg:leading-[56px] text-white leading-tight"
          >
            {headingWords.map((word, i) => (
              <span key={i} className="word-mask mr-[0.24em] last:mr-0 inline-block overflow-hidden">
                <span className="word-inner inline-block will-change-transform">{word}</span>
              </span>
            ))}
          </h2>

          <p
            ref={descRef}
            className="avenir-500 text-slate-400 text-sm sm:text-base lg:text-[18px] mt-4 leading-7"
          >
            Most businesses only get a logo mark. Select a project below to see how we build scalable visual identities end-to-end.
          </p>
        </div>

        {/* Sticky Cards Stacking */}
        <div className="mt-12 sm:mt-16 flex flex-col gap-8 sm:gap-12 lg:gap-16">
          {brandProjects.map((project, index) => (
            <BrandProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* <div className="mt-12 sm:mt-16 flex justify-center">
          <Button
            href="#contact"
            label="Download Full Portfolio"
            variant="dark"
            icon={<Download size={16} />}
            className="h-12 border border-white/20 hover:border-white"
            size="lg"
          />
        </div> */}
      </div>
    </section>
  );
}
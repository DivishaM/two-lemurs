import { useEffect, useRef } from 'react';
import type { BrandProject } from '../../../data/brandProjects';
import { Button } from '../../common/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BrandProjectCardProps {
  project: BrandProject;
  index: number;
}

export default function BrandProjectCard({
  project,
  index,
}: BrandProjectCardProps) {
  const isReversed = index % 2 === 1;

  const cardRef = useRef<HTMLDivElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const contentColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 82%',
        },
      });

      // 1. Image Cinematic Scale-In Entrance
      if (imgRef.current) {
        tl.fromTo(
          imgRef.current,
          { scale: 1.15, opacity: 0.75 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
          },
          0
        );
      }

      // 2. Title Word Reveal Animation (Slides up from mask)
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.word-inner');
        tl.fromTo(
          words,
          { yPercent: 120, rotate: 2.5, opacity: 0 },
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power4.out',
          },
          0.1
        );
      }

      // 3. Blue Square Dot Pop-In with Elastic Spin
      if (dotRef.current) {
        tl.fromTo(
          dotRef.current,
          { scale: 0, rotate: -180 },
          {
            scale: 1,
            rotate: 0,
            duration: 0.75,
            ease: 'back.out(2.5)',
          },
          0.3
        );
      }

      // 3.5. Tagline Fade-Up
      if (taglineRef.current) {
        tl.fromTo(
          taglineRef.current,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
          },
          0.18
        );
      }

      // 4. Description Paragraph Fade-Up
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
          },
          0.24
        );
      }

      // 5. Button Slide-Up Entrance
      if (btnRef.current) {
        tl.fromTo(
          btnRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
          },
          0.35
        );
      }

      // 6. Interactive Mouse Depth Parallax for Image & Content
      if (
        window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
        cardRef.current &&
        imgRef.current
      ) {
        const card = cardRef.current;
        const img = imgRef.current;
        const content = contentColRef.current;

        const qImgX = gsap.quickTo(img, 'x', { duration: 0.8, ease: 'power2.out' });
        const qImgY = gsap.quickTo(img, 'y', { duration: 0.8, ease: 'power2.out' });
        const qContentX = content
          ? gsap.quickTo(content, 'x', { duration: 1.0, ease: 'power3.out' })
          : null;
        const qContentY = content
          ? gsap.quickTo(content, 'y', { duration: 1.0, ease: 'power3.out' })
          : null;

        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;

          qImgX(x * 16);
          qImgY(y * 12);

          if (qContentX && qContentY) {
            qContentX(-x * 8);
            qContentY(-y * 6);
          }
        };

        const handleMouseLeave = () => {
          qImgX(0);
          qImgY(0);
          if (qContentX && qContentY) {
            qContentX(0);
            qContentY(0);
          }
        };

        card.addEventListener('mousemove', handleMouseMove, { passive: true });
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          card.removeEventListener('mousemove', handleMouseMove);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const titleWords = project.title.split(' ');

  return (
    <div
      ref={cardRef}
      className={`group sticky top-20 lg:top-[76px] xl:top-28 border border-white/10 bg-dark-card p-3 sm:p-5 lg:p-[18px] xl:p-[20px] flex flex-col ${
        isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-stretch gap-4 sm:gap-6 lg:gap-4 xl:gap-5 shadow-2xl transition-all duration-400 w-full mx-auto hover:border-white/20 brand-project-sticky-card min-h-0`}
    >
      {/* Project Showcase Image with Ken Burns entrance, hover zoom, and mouse parallax */}
      <div
        ref={imgWrapperRef}
        className="brand-card-img-wrapper w-full lg:w-[68%] xl:w-[70%] aspect-[16/9] flex items-center justify-center overflow-hidden flex-shrink-0 relative select-none cursor-pointer min-h-0"
      >
        <img
          ref={imgRef}
          src={project.image}
          alt={`${project.title} - Brand Identity Design Case Study by Two Lemurs`}
          width={1920}
          height={1080}
          className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105 will-change-transform"
          loading="lazy"
          decoding="async"
        />

        {/* Subtle dynamic sheen overlay on image hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Side with animated title, dot, and description */}
      <div
        ref={contentColRef}
        className="brand-card-content w-full lg:flex-1 bg-white p-4 sm:p-5 lg:p-5 xl:p-6 flex flex-col justify-between min-w-0 min-h-0 transition-colors duration-300 will-change-transform overflow-hidden"
      >
        <div>
          {/* Headline with single entrance reveal animation on scroll, no repetitive hover flashing */}
          <h3
            ref={titleRef}
            className="avenir-600 text-xl sm:text-xl xl:text-2xl text-typography-main tracking-tight cursor-default"
          >
            {titleWords.map((word, i) => (
              <span
                key={i}
                className="word-mask mr-[0.22em] last:mr-0 inline-block overflow-hidden align-top"
              >
                <span className="word-inner inline-block will-change-transform">
                  {word}
                </span>
              </span>
            ))}

            {/* Blue square dot marker */}
            <span
              ref={dotRef}
              className="inline-block h-2 w-2 bg-primary ml-1.5 align-middle flex-shrink-0 will-change-transform"
            />
          </h3>

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="brand-card-tagline avenir-600 text-base sm:text-base lg:text-[18px] text-slate-800 tracking-tight mt-1.5 sm:mt-2 xl:mt-2.5 will-change-transform cursor-default"
          >
            {project.tagline}
          </p>

          {/* Preserved Original Continuous Paragraph Structure */}
          <p
            ref={descRef}
            className="brand-card-desc avenir-500 text-sm sm:text-sm lg:text-[16px] xl:text-base text-slate-600 leading-relaxed mt-2.5 sm:mt-3.5 xl:mt-4 will-change-transform"
          >
            {project.description}
          </p>
        </div>

        {/* Animated Action Button with kinetic micro-hover */}
        <div
          ref={btnRef}
          className="brand-card-btn avenir-500 mt-4 sm:mt-6 xl:mt-8 pt-2 sm:pt-3 xl:pt-4 will-change-transform transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:-translate-y-1 flex-shrink-0"
        >
          <Button
            href={project.link || '#contact'}
            target={project.link ? '_blank' : undefined}
            rel={project.link ? 'noopener noreferrer' : undefined}
            label="View Live Project"
            variant="dark"
            icon="arrow-up-right"
            size="md"
            className="w-full justify-center transition-all duration-300 group-hover:border-primary/50"
          />
        </div>
      </div>
    </div>
  );
}

export { BrandProjectCard };
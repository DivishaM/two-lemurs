import { useEffect, useRef } from "react";
import { Button } from "../common/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgScrollRef = useRef<HTMLDivElement>(null);
  const bgMouseRef = useRef<HTMLDivElement>(null);
  const mobileImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // 1. Staggered Word Reveal for Headline
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".word-inner");
        gsap.fromTo(
          words,
          { yPercent: 120, rotate: 2, opacity: 0 },
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.055,
            ease: "power4.out",
            delay: 0.1,
          }
        );
      }

      // 2. Subtitle & Buttons Entrance Fade-Up
      const tl = gsap.timeline({ delay: 0.3 });

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          0
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          0.15
        );
      }

      // 3. Cinematic Ken Burns Scale-In for Background Graphic
      if (bgMouseRef.current) {
        gsap.fromTo(
          bgMouseRef.current,
          { scale: 1.07, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.8,
            ease: "power2.out",
          }
        );
      }

      if (mobileImgRef.current) {
        gsap.fromTo(
          mobileImgRef.current,
          { scale: 1.06, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.8,
            ease: "power2.out",
          }
        );
      }

      // 4. Smooth Scroll Depth (Applied strictly to parent wrapper to avoid any transform fighting)
      if (heroRef.current && bgScrollRef.current) {
        gsap.to(bgScrollRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }

      // 5. Smooth Text Scroll Scrub (Gently drifts up on scroll)
      if (heroRef.current) {
        gsap.to(".hero-text-content", {
          yPercent: -15,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 6. Interactive Mouse Depth Parallax (Applied strictly to child wrapper - completely flicker-free)
      if (
        window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
        heroRef.current &&
        bgMouseRef.current
      ) {
        const heroEl = heroRef.current;
        const qX = gsap.quickTo(bgMouseRef.current, "x", { duration: 1.2, ease: "power3" });
        const qY = gsap.quickTo(bgMouseRef.current, "y", { duration: 1.2, ease: "power3" });

        const handleMouseMove = (e: MouseEvent) => {
          const rect = heroEl.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight) return;
          const x = e.clientX / window.innerWidth - 0.5;
          const y = e.clientY / window.innerHeight - 0.5;
          qX(-x * 20);
          qY(-y * 14);
        };

        heroEl.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
          heroEl.removeEventListener("mousemove", handleMouseMove);
        };
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headline = "Build what's next for your business.";
  const words = headline.split(" ");

  return (
    <section ref={heroRef} className="relative flex flex-col overflow-hidden bg-gray-50 xl:min-h-screen">
      {/* Desktop Hero Image with 2-tier independent parallax (100% flicker-free) */}
      <div
        ref={bgScrollRef}
        className="pointer-events-none absolute -inset-y-8 inset-x-0 z-0 hidden xl:block select-none will-change-transform"
      >
        <div ref={bgMouseRef} className="w-full h-full will-change-transform">
          <img
            src="./images/hero-image.webp"
            alt="Two Lemurs Hero Graphic"
            width={1448}
            height={1086}
            className="h-full w-full object-cover object-right"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Mobile & Tablet Hero Image with smooth Ken Burns entrance */}
      <div className="relative flex h-[48vh] sm:h-[70vh] w-full items-center justify-center overflow-hidden xl:hidden pt-4 sm:pt-6 select-none">
        <img
          ref={mobileImgRef}
          src="./images/hero-image.webp"
          alt="Two Lemurs Hero Graphic"
          width={1448}
          height={1086}
          className="pointer-events-none h-full w-auto max-w-none object-contain -translate-x-[12%] sm:-translate-x-[10%] will-change-transform"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      <div className="container relative z-10 mx-auto px-0 sm:px-6 xl:px-8 mt-auto pb-9 sm:pb-12 xl:pb-20 pt-2 sm:pt-8 xl:pt-36">
        <div className="hero-text-content flex w-full max-w-[640px] flex-col gap-[18px] md:gap-8 will-change-transform">
          {/* Headline with smooth word-by-word reveal */}
          <h1
            ref={titleRef}
            className="gothic-800 text-[32px] leading-[40px] sm:text-4xl md:text-5xl lg:text-[56px] sm:leading-tight lg:leading-[64px] tracking-tight text-typography-main"
          >
            {words.map((word, index) => (
              <span key={index} className="word-mask mr-[0.24em] last:mr-0">
                <span className="word-inner">{word}</span>
              </span>
            ))}
          </h1>

          <p
            ref={subtitleRef}
            className="text-sm leading-[20px] md:text-xl md:leading-7 text-slate-700 avenir-500"
          >
            We turn ideas into practical solutions across branding, websites
            and digital products – combining strategy, design and technology.
          </p>

          <div
            ref={ctaRef}
            className="avenir-500 flex h-10 sm:h-12 flex-row items-center gap-2.5 sm:gap-4"
          >
            <Button
              href="#contact"
              label="Start a Project"
              variant="primary"
              icon="arrow-up-right"
              size="md"
              className="h-10 sm:h-12 font-medium sm:w-[170px]"
            />

            <Button
              href="#portfolio"
              label="View our work"
              variant="secondary"
              icon="arrow-down-right"
              size="md"
              className="h-10 sm:h-12 font-medium sm:w-[170px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
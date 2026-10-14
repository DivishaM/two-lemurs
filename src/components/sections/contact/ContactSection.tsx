import { useEffect, useRef } from 'react';
import ContactForm from './ContactForm';
import { Phone, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const directRef = useRef<HTMLDivElement>(null);
  const formWrapperRef = useRef<HTMLDivElement>(null);

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
              start: 'top 80%',
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
              start: 'top 80%',
            },
          }
        );
      }

      if (directRef.current) {
        gsap.fromTo(
          directRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.25,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      if (formWrapperRef.current) {
        gsap.fromTo(
          formWrapperRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-typography-dark py-12 md:py-20 xl:py-32 text-white"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 2xl:gap-16 gap-8">
        {/* Left Content */}
        <div>
          <h2
            ref={titleRef}
            className="font-extrabold text-white lg:text-5xl lg:leading-[56px] md:text-4xl md:leading-[44px] text-[28px] leading-9 gothic-800"
          >
            <span className="word-mask mr-[0.22em] inline-block overflow-hidden">
              <span className="word-inner inline-block will-change-transform">Have</span>
            </span>
            <span className="word-mask mr-[0.22em] inline-block overflow-hidden">
              <span className="word-inner inline-block will-change-transform">a</span>
            </span>
            <span className="word-mask inline-block overflow-hidden">
              <span className="word-inner inline-block will-change-transform">good</span>
            </span>
            <br />
            <span className="word-mask mr-[0.22em] inline-block overflow-hidden">
              <span className="word-inner inline-block will-change-transform">problem</span>
            </span>
            <span className="word-mask mr-[0.22em] inline-block overflow-hidden">
              <span className="word-inner inline-block will-change-transform">for</span>
            </span>
            <span className="word-mask inline-block overflow-hidden">
              <span className="word-inner inline-block will-change-transform">us?</span>
            </span>
          </h2>

          <p
            ref={descRef}
            className="mt-3 text-sm font-medium leading-5 text-typography-light md:text-lg md:leading-7 avenir-500 max-w-[400px]"
          >
            Tell us where you are, where you want to go,
            and what is standing in the way.
          </p>

          <div ref={directRef} className="lg:mt-16 mt-8">
            <p className="text-sm font-medium text-white md:text-lg avenir-400">
              Prefer speaking with our team directly?
            </p>

            <div className="mt-5 flex flex-wrap lg:gap-6 gap-3">
              <a
                href="tel:+61255503559"
                title="+61 255 503 559"
                className="group flex items-center gap-2"
              >
                <span className="flex size-9 items-center justify-center border border-[#29353E] transition-colors duration-300 group-hover:bg-[#35434D]">
                  <Phone
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-rotate-12"
                  />
                </span>
                <span className="text-sm font-medium text-white md:text-base avenir-400">
                  +61 255 503 559
                </span>
              </a>

              <a
                href="mailto:info@twolemurs.com"
                title="info@twolemurs.com"
                className="group flex items-center gap-2"
              >
                <span className="flex size-9 items-center justify-center border border-[#29353E] transition-colors duration-300 group-hover:bg-[#35434D]">
                  <Mail
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-rotate-12"
                  />
                </span>
                <span className="text-sm font-medium text-white md:text-base avenir-400">
                  info@twolemurs.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div ref={formWrapperRef}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

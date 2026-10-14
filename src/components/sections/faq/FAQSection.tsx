import { useState, useEffect, useRef } from 'react';
import FAQItem from './FAQItem';
import { faqData } from '../../../data/faqData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // Smooth text reveal on heading
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.word-inner');
        if (words.length > 0) {
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
                start: 'top 85%',
              },
            }
          );
        }
      }

      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 88%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="bg-typography-offwhite py-16 sm:py-20 lg:py-24"
    >
      <div className="container">
        <div className="grid grid-cols-1 2xl:gap-10 gap-8 lg:grid-cols-2 items-start">
          {/* Left Content - Sticky on desktop so it stays aligned with the FAQ list */}
          <div className="lg:sticky lg:top-32">
            <h2
              ref={titleRef}
              className="font-extrabold text-typography-dark lg:text-5xl lg:leading-[56px] md:text-4xl md:leading-[44px] text-[28px] leading-9 gothic-800"
            >
              <span className="word-mask inline-block overflow-hidden mr-[0.2em]">
                <span className="word-inner inline-block will-change-transform">Frequently</span>
              </span>
              <span className="word-mask inline-block overflow-hidden">
                <span className="word-inner inline-block will-change-transform">Asked</span>
              </span>
              <br />
              <span className="word-mask inline-block overflow-hidden">
                <span className="word-inner inline-block will-change-transform">Questions</span>
              </span>
            </h2>

            <p
              ref={descRef}
              className="mt-3 text-sm font-medium text-typography-light md:text-base lg:text-lg avenir-500 max-w-[450px] w-[90%]"
            >
              Lorem ipsum dolor sit amet consectetur. Quisque pulvinar quam metus lacus. Cursus pharetra
            </p>
          </div>

          {/* Right FAQ List */}
          <div ref={listRef} className="min-h-[380px]">
            {faqData.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

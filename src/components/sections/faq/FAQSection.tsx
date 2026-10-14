import { useState, useEffect, useRef } from 'react';
import FAQItem from './FAQItem';
import { faqData } from '../../../data/faqData';
import { useSmoothScroll } from '../../../context/SmoothScrollContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  // Start with first item open (as in demo1.html)
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lenis } = useSmoothScroll();

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isManualRef = useRef<boolean>(false);
  const manualTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const desktopStRef = useRef<ScrollTrigger | null>(null);

  const totalItems = faqData.length;

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

      // Responsive Scroll-Driven Accordion
      const mm = gsap.matchMedia();

      // Desktop & large screens (pinned scroll-driven sequence):
      // Each scroll step opens an item one by one
      mm.add('(min-width: 1024px) and (min-height: 600px)', () => {
        if (!sectionRef.current) return;

        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 72px',
          end: '+=1500',
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (isManualRef.current) return;
            const progress = self.progress;
            const targetIdx = Math.min(
              Math.floor(progress * totalItems),
              totalItems - 1
            );
            setOpenIndex(targetIdx);
          },
          onEnter: () => {
            if (!isManualRef.current) setOpenIndex(0);
          },
          onLeaveBack: () => {
            if (!isManualRef.current) setOpenIndex(0);
          },
        });

        desktopStRef.current = st;
      });

      // Mobile / smaller screens (natural scroll triggers per item):
      mm.add('(max-width: 1023px), (max-height: 599px)', () => {
        itemRefs.current.forEach((el, index) => {
          if (!el) return;
          ScrollTrigger.create({
            trigger: el,
            start: 'top 65%',
            end: 'bottom 35%',
            onEnter: () => {
              if (!isManualRef.current) setOpenIndex(index);
            },
            onEnterBack: () => {
              if (!isManualRef.current) setOpenIndex(index);
            },
          });
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      if (manualTimerRef.current) clearTimeout(manualTimerRef.current);
    };
  }, [totalItems]);

  const handleToggle = (index: number) => {
    isManualRef.current = true;
    if (manualTimerRef.current) clearTimeout(manualTimerRef.current);

    const nextIndex = openIndex === index ? null : index;
    setOpenIndex(nextIndex);

    // If pinned on desktop, synchronize the scroll position to the selected item
    if (nextIndex !== null && desktopStRef.current) {
      const st = desktopStRef.current;
      const targetProgress = (nextIndex / totalItems) + (0.5 / totalItems);
      const targetScroll = st.start + targetProgress * (st.end - st.start);

      if (lenis) {
        lenis.scrollTo(targetScroll, { duration: 0.8 });
      } else {
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }

    manualTimerRef.current = setTimeout(() => {
      isManualRef.current = false;
    }, 850);
  };

  const handleHover = (index: number) => {
    // On desktop, hovering opens the item if not actively scrolling (reference demo1.html)
    if (isManualRef.current) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    setOpenIndex(index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="bg-typography-offwhite py-12 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="container">
        <div className="grid grid-cols-1 2xl:gap-10 gap-3 lg:grid-cols-2 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-28">
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
              <div
                key={item.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
              >
                <FAQItem
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                  onHover={() => handleHover(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

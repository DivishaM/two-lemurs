import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../common/Button";
import { RollUpText } from "../common/RollUpText";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      if (window.scrollY < window.innerHeight * 1.5) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contentTranslate = scrollY * 0.22;
  const contentOpacity = Math.max(0, 1 - scrollY / 600);
  const imageTranslate = scrollY * 0.1;

  return (
    <section className="relative flex flex-col overflow-hidden bg-gray-50 xl:min-h-screen">

      {/* Desktop Hero Image */}
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden xl:block will-change-transform"
        style={{ transform: `translateY(${imageTranslate}px)` }}
      >
        <img
          src="./images/hero-image.png"
          alt="Two Lemurs Hero Graphic"
          className="h-full w-full object-cover object-right"
        />
      </div>

      {/* Mobile & Tablet Hero Image */}
      <div
        className="relative flex h-[48vh] sm:h-[70vh] w-full items-center justify-center overflow-hidden xl:hidden pt-4 sm:pt-6 will-change-transform"
        style={{ transform: `translateY(${imageTranslate * 0.8}px)` }}
      >
        <img
          src="./images/hero-image.png"
          alt="Two Lemurs Hero Graphic"
          className="pointer-events-none h-full w-auto max-w-none object-contain -translate-x-[12%] sm:-translate-x-[10%]"
        />
      </div>

      <div
        className="container relative z-10 mx-auto px-0 sm:px-6 xl:px-8 mt-auto pb-9 sm:pb-12 xl:pb-20 pt-2 sm:pt-8 xl:pt-36 will-change-transform"
        style={{
          transform: `translateY(${contentTranslate}px)`,
          opacity: contentOpacity,
        }}
      >
        <div className="flex w-full max-w-[640px] flex-col gap-[18px] md:gap-8">

          <h1 className="gothic-800 text-[32px] leading-[40px] sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[64px] tracking-tight text-typography-main">
            <RollUpText
              text="Build what's next for your business."
              isVisible={isLoaded}
              initialDelay={100}
              delayStep={85}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="text-sm leading-[20px] md:text-xl md:leading-[28px] text-slate-700 avenir-500"
          >
            We turn ideas into practical solutions across branding, websites
            and digital products – combining strategy, design and technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
            className="avenir-500 flex h-10 sm:h-12 flex-row items-center gap-2.5 sm:gap-4"
          >
            <Button
              label="Start a Project"
              variant="primary"
              icon="arrow-up-right"
              size="md"
              className="h-10 sm:h-12 font-medium sm:w-[170px]"
            />

            <Button
              label="View our work"
              variant="secondary"
              icon="arrow-down-right"
              size="md"
              className="h-10 sm:h-12 font-medium sm:w-[170px]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
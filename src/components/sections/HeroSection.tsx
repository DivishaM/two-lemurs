import { Button } from "../common/Button";
import { RollUpText } from "../common/RollUpText";
import { useParallax } from "../../hooks";

export default function HeroSection() {
  const { isLoaded, contentTranslate, imageTranslate, contentOpacity } = useParallax();

  return (
    <section className="relative flex flex-col overflow-hidden bg-gray-50 xl:min-h-screen">

      {/* Desktop Hero Image */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 hidden xl:block will-change-transform transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.96]'
        }`}
        style={{ transform: `translateY(${imageTranslate}px)` }}
      >
        <div className="h-full w-full animate-float-slow">
          <img
            src="./images/hero-image.png"
            alt="Two Lemurs Hero Graphic"
            className="h-full w-full object-cover object-right"
          />
        </div>
      </div>

      {/* Mobile & Tablet Hero Image */}
      <div
        className={`relative flex h-[48vh] sm:h-[70vh] w-full items-center justify-center overflow-hidden xl:hidden pt-4 sm:pt-6 will-change-transform transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.96]'
        }`}
        style={{ transform: `translateY(${imageTranslate * 0.8}px)` }}
      >
        <div className="h-full w-auto flex items-center justify-center animate-float-slow">
          <img
            src="./images/hero-image.png"
            alt="Two Lemurs Hero Graphic"
            className="pointer-events-none h-full w-auto max-w-none object-contain -translate-x-[12%] sm:-translate-x-[10%]"
          />
        </div>
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

          <p
            className={`text-sm leading-[20px] md:text-xl md:leading-[28px] text-slate-700 avenir-500 transition-all duration-700 ease-out will-change-transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            We turn ideas into practical solutions across branding, websites
            and digital products – combining strategy, design and technology.
          </p>

          <div
            className={`avenir-500 flex h-10 sm:h-12 flex-row items-center gap-2.5 sm:gap-4 transition-all duration-700 ease-out will-change-transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "500ms" }}
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
          </div>

        </div>
      </div>
    </section>
  );
}
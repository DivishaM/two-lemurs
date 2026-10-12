import { Button } from "../common/Button";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-gray-50 lg:min-h-[700px]">

      {/* Desktop Hero Image */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        <img
          src="/images/hero-image.png"
          alt="Two Lemurs Hero Graphic"
          className="h-full w-full object-cover object-right"
        />
      </div>

      {/* Mobile Hero Image */}
      <div className="relative flex h-[300px] items-center justify-center overflow-hidden sm:h-[360px] lg:hidden">
        <img
          src="/images/hero-image.png"
          alt="Two Lemurs Hero Graphic"
          className="pointer-events-none h-auto w-[520px] max-w-none -translate-x-[12%] sm:w-[620px]"
        />
      </div>

      <div className="container relative z-10 mt-auto pb-10 pt-2 sm:pb-12 lg:pb-16 xl:pb-20">
        <div className="flex max-w-xl flex-col gap-4 sm:gap-5 lg:gap-6">

          <h1 className="gothic-800 text-3xl leading-tight tracking-tight text-typography-main sm:text-4xl md:text-5xl lg:text-6xl">
            Build what&apos;s next for your business.
          </h1>

          <p className="max-w-lg text-sm leading-relaxed text-slate-700 sm:text-base">
            We turn ideas into practical solutions across branding, websites
            and digital products – combining strategy, design and technology.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button
              label="Start a Project"
              variant="primary"
              icon="arrow-up-right"
              size="md"
            />

            <Button
              label="View our work"
              variant="secondary"
              icon="arrow-down-right"
              size="md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
import { Button } from "../common/Button";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-gray-50 min-h-screen">

      {/* Desktop Hero Image */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        <img
          src="./images/hero-image.png"
          alt="Two Lemurs Hero Graphic"
          className="h-full w-full object-cover object-right"
        />
      </div>

      {/* Mobile Hero Image */}
      <div className="relative flex h-[300px] items-center justify-center overflow-hidden sm:h-[360px] lg:hidden">
        <img
          src="./images/hero-image.png"
          alt="Two Lemurs Hero Graphic"
          className="pointer-events-none h-auto w-[520px] max-w-none -translate-x-[12%] sm:w-[620px]"
        />
      </div>

      <div className="container relative z-10 mt-auto pb-10 pt-24 sm:pb-12 sm:pt-28 lg:pb-16 lg:pt-36 xl:pb-20">
        <div className="flex w-full max-w-[640px] flex-col gap-6 lg:gap-8">

          <h1 className="gothic-800 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight lg:leading-[64px] tracking-tight text-typography-main">
            Build what&apos;s next for your business.
          </h1>

          <div className="flex flex-col gap-8">
            <p className="text-xl leading-7 text-slate-700 avenir-500">
              We turn ideas into practical solutions across branding, websites
              and digital products – combining strategy, design and technology.
            </p>

            <div className="avenir-500 flex flex-wrap items-center gap-4">
              <Button
                label="Start a Project"
                variant="primary"
                icon="arrow-up-right"
                size="md"
                className="h-12 w-[170px]"
              />

              <Button
                label="View our work"
                variant="secondary"
                icon="arrow-down-right"
                size="md"
                className="h-12 w-[170px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
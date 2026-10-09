import { Button } from '../common/Button';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFBFC] min-h-[auto] lg:min-h-[740px] xl:min-h-[800px] flex flex-col justify-end">
      
      <div className="hidden lg:block absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/images/hero-image.png"
          alt="Two Lemurs Hero Graphic"
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="lg:hidden w-full h-[340px] sm:h-[400px] md:h-[460px] overflow-hidden relative flex items-center justify-center">
        <img
          src="/images/hero-image.png"
          alt="Two Lemurs Hero Graphic"
          className="absolute w-[580px] sm:w-[680px] md:w-[780px] max-w-none h-auto -translate-x-[27%] pointer-events-none select-none"
        />
      </div>

      <div className="container relative z-10 pt-2 pb-12 sm:pb-16 lg:pb-24">
        <div className="max-w-xl lg:max-w-2xl flex flex-col gap-5 sm:gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-extrabold text-typography-main tracking-tight leading-[1.12]">
            Build what&apos;s next for your business.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-typography-muted max-w-lg leading-relaxed">
            We turn ideas into practical solutions across branding, websites and
            digital products – combining strategy, design and technology.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
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

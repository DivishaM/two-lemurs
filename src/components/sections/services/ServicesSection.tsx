import { servicesData } from '../../../data/services';
import { ServiceCard } from './ServiceCard';
import { Button } from '../../common/Button';
import { RollUpText } from '../../common/RollUpText';
import { useScrollReveal } from '../../../hooks';

export default function ServicesSection() {
  const { ref: headingRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-[136px]">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        <div
          ref={headingRef}
          className={`lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left lg:sticky lg:top-48 transition-all duration-700 ease-out will-change-transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="gothic-800 text-[28px] sm:text-4xl lg:text-5xl leading-[36px] lg:leading-[56px] text-typography-main">
            <RollUpText
              text="Services That Make an Impact"
              isVisible={isVisible}
              initialDelay={100}
              delayStep={80}
            />
          </h2>
          <p
            className={`avenir-500 text-slate-600 text-sm sm:text-lg leading-[20px] sm:leading-[28px] mt-4 max-w-md transition-all duration-700 ease-out will-change-transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            From brand identity to websites, we help growing businesses build a clear, consistent presence.
          </p>
          <div
            className={`avenir-500 mt-6 transition-all duration-700 ease-out will-change-transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <Button
              label="View our work"
              variant="secondary"
              icon="arrow-down-right"
              size="md"
              className="h-12 w-[170px]"
            />
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
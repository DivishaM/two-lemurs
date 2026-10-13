import { servicesData } from '../../../data/services';
import { ServiceCard } from './ServiceCard';
import { Button } from '../../common/Button';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-[136px]">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left lg:sticky lg:top-48">
          <h2 className="gothic-800 text-3xl sm:text-4xl lg:text-5xl text-typography-main leading-tight">
            Services That Make an Impact
          </h2>
          <p className="avenir-500 text-slate-600 text-base sm:text-lg mt-4 max-w-md ">
            From brand identity to websites, we help growing businesses build a clear, consistent presence.
          </p>
          <div className="avenir-500 mt-6">
            <Button
              label="View our work"
              variant="secondary"
              icon="arrow-down-right"
              size="md"
              className="h-12 w-[170px] !px-4 !text-base"
            />
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}
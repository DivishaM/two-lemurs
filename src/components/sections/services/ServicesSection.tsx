import { servicesData } from '../../../data/services';
import { ServiceCard } from './ServiceCard';
import { Button } from '../../common/Button';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left lg:sticky lg:top-24">
          <h2 className="gothic-800 text-3xl sm:text-4xl lg:text-5xl text-typography-main leading-tight">
            Services That Make an Impact
          </h2>
          <p className="avenir-400 text-slate-600 text-sm sm:text-base mt-4 max-w-md">
            From brand identity to websites, we help growing businesses build a clear, consistent presence.
          </p>
          <div className="mt-6">
            <Button
              label="View our work"
              variant="secondary"
              icon="arrow-down-right"
              size="md"
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

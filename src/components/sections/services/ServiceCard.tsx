import React from 'react';
import type { ServiceItem } from '../../../data/services';
import { useStaggeredReveal } from '../../../hooks';

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  const { ref: cardRef, isVisible, delayMs, subDelayMs } = useStaggeredReveal<HTMLDivElement>(index, {
    threshold: 0.12,
    delayStep: 100,
    itemsPerRow: 3,
  });

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`border border-surface-border bg-white p-6 sm:p-8 lg:p-10 min-h-[264px] lg:h-[278px] flex flex-col justify-between transition-all duration-700 ease-out will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div>
        <h3 className="avenir-600 text-[22px] sm:text-[26px] leading-[32px] sm:leading-[36px] text-typography-main">
          {service.title}
        </h3>
        <p
          className={`avenir-500 text-base sm:text-lg text-slate-600 mt-3 leading-[24px] sm:leading-[28px] max-w-[500px] transition-all duration-700 ease-out will-change-transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ transitionDelay: `${subDelayMs(180)}ms` }}
        >
          {service.description}
        </p>
      </div>
      <div
        className={`flex flex-wrap gap-2 mt-6 sm:mt-8 transition-all duration-700 ease-out will-change-transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        style={{ transitionDelay: `${subDelayMs(300)}ms` }}
      >
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="h-8 sm:h-9 inline-flex items-center bg-slate-100 text-slate-700 text-xs sm:text-sm leading-[18px] sm:leading-[20px] avenir-500 px-3 sm:px-4"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
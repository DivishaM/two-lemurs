import React from 'react';
import type { ServiceItem } from '../../../data/services';
import { FadeIn } from '../../common/FadeIn';

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  return (
    <FadeIn
      as="div"
      delay={(index % 3) * 0.1}
      duration={0.7}
      distance={32}
      className="border border-surface-border bg-white p-6 sm:p-8 lg:p-10 min-h-[264px] lg:h-[278px] flex flex-col justify-between"
    >
      <div>
        <h3 className="avenir-600 text-[22px] sm:text-[26px] leading-[32px] sm:leading-[36px] text-typography-main">
          {service.title}
        </h3>
        <FadeIn
          as="p"
          delay={(index % 3) * 0.1 + 0.18}
          distance={14}
          className="avenir-500 text-base sm:text-lg text-slate-600 mt-3 leading-[24px] sm:leading-[28px] max-w-[500px]"
        >
          {service.description}
        </FadeIn>
      </div>
      <FadeIn
        delay={(index % 3) * 0.1 + 0.3}
        distance={10}
        className="flex flex-wrap gap-2 mt-6 sm:mt-8"
      >
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="h-8 sm:h-9 inline-flex items-center bg-slate-100 text-slate-700 text-xs sm:text-sm leading-[18px] sm:leading-[20px] avenir-500 px-3 sm:px-4"
          >
            {tag}
          </span>
        ))}
      </FadeIn>
    </FadeIn>
  );
};

export default ServiceCard;
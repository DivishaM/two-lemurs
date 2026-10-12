import React from 'react';
import type { ServiceItem } from '../../../data/services';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="border border-surface-border bg-white p-6 sm:p-8 lg:p-10 min-h-[250px] lg:h-[278px] flex flex-col justify-between">
      <div>
        <h3 className="avenir-600 text-xl sm:text-[26px] text-typography-main">
          {service.title}
        </h3>
        <p className="avenir-500 text-base sm:text-lg text-slate-600 mt-3 leading-relaxed max-w-[500px]">
          {service.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6 sm:mt-8">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="h-9 inline-flex items-center bg-slate-100 text-slate-700 text-sm avenir-500 px-4"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
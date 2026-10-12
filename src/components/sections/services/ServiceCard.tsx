import React from 'react';
import type { ServiceItem } from '../../../data/services';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="border border-surface-border bg-white p-6 sm:p-8 lg:p-10">
      <h3 className="gothic-700 text-xl sm:text-2xl text-typography-main">
        {service.title}
      </h3>
      <p className="avenir-400 text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-6 sm:mt-8">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="bg-slate-100 text-slate-700 text-xs avenir-500 px-3.5 py-1.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;

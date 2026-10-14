import React, { useRef, useEffect } from 'react';
import type { ServiceItem } from '../../../data/services';
import gsap from 'gsap';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -4,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        duration: 0.45,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="service-card border border-surface-border bg-white p-6 sm:p-8 lg:p-10 min-h-[264px] lg:h-[278px] flex flex-col justify-between transition-colors duration-300 hover:border-typography-dark"
    >
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
            className="h-8 sm:h-9 inline-flex items-center bg-slate-100 text-slate-700 text-xs sm:text-sm avenir-500 px-3 sm:px-4 transition-colors duration-200 hover:bg-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
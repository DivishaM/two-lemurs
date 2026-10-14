import React from 'react';
import type { BrandProject } from '../../../data/brandProjects';
import { Button } from '../../common/Button';
import { RollUpText } from '../../common/RollUpText';
import { useScrollReveal, useCardStacking, useMouseSpotlight } from '../../../hooks';

interface BrandProjectCardProps {
  project: BrandProject;
  index: number;
}

export const BrandProjectCard: React.FC<BrandProjectCardProps> = ({
  project,
  index,
}) => {
  const isReversed = index % 2 === 1;

  // Custom Hooks for Clean Separation of Animation Concerns
  const { ref: cardRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { cardScale, cardBrightness, imageOffset } = useCardStacking(cardRef);
  const { mousePos, isHovered, spotlightProps } = useMouseSpotlight();

  return (
    <div
      ref={cardRef}
      {...spotlightProps}
      style={{
        transform: isVisible ? `scale(${cardScale})` : 'scale(0.98) translateY(40px)',
        filter: `brightness(${cardBrightness})`,
        transformOrigin: 'top center',
      }}
      className={`relative group sticky top-24 lg:top-28 border border-white/10 bg-dark-card p-4 sm:p-6 lg:p-[20px] flex flex-col ${
        isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-stretch gap-6 sm:gap-8 lg:gap-5 shadow-2xl transition-opacity duration-700 ease-out will-change-transform w-full mx-auto overflow-hidden ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Outer Card Mouse Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 60%)`,
        }}
      />

      {/* Image Container with Parallax */}
      <div className="relative w-full lg:w-[68%] xl:w-[70%] aspect-[856/600] flex items-center justify-center overflow-hidden bg-black/30 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          style={{
            transform: `translateY(${imageOffset}px) scale(${isHovered ? 1.04 : 1.01})`,
          }}
          className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform"
        />
        {/* Subtle image gradient overlay on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Text Content Card */}
      <div
        className={`relative w-full lg:flex-1 bg-white lg:p-6 p-4 flex flex-col justify-between min-w-0 transition-all duration-700 delay-150 ease-out will-change-transform overflow-hidden ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : isReversed
            ? 'opacity-0 -translate-x-6'
            : 'opacity-0 translate-x-6'
        }`}
      >
        {/* Text Card Mouse Glow */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(20,184,166,0.07), transparent 70%)`,
          }}
        />

        <div className="relative z-10">
          <h3 className="avenir-600 text-xl sm:text-2xl leading-[28px] sm:leading-[32px] text-typography-main">
            <RollUpText text={project.title} isVisible={isVisible} initialDelay={200} accentDot />
          </h3>
          <p
            className={`avenir-500 text-sm sm:text-base text-slate-600 leading-[20px] sm:leading-[24px] mt-4 transition-all duration-700 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            {project.description}
          </p>
        </div>

        <div
          className={`relative z-10 avenir-500 mt-8 pt-4 transition-all duration-700 delay-400 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <Button
            label="View live project"
            variant="dark"
            icon="arrow-up-right"
            size="md"
            className="w-full justify-center group-hover:bg-black group-hover:shadow-md transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandProjectCard;
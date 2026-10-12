import React from 'react';
import type { BrandProject } from '../../../data/brandProjects';
import { Button } from '../../common/Button';

interface BrandProjectCardProps {
  project: BrandProject;
  index: number;
}

export const BrandProjectCard: React.FC<BrandProjectCardProps> = ({
  project,
  index,
}) => {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`sticky top-24 lg:top-28 border border-white/10 bg-dark-card p-4 sm:p-6 lg:p-[20px] flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-stretch gap-6 sm:gap-8 lg:gap-5 shadow-2xl transition-all duration-300 w-full mx-auto`}
    >
      <div className="w-full lg:w-[70%] lg:h-[600px] flex items-center justify-center overflow-hidden bg-black/30">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="w-full lg:w-[30%] lg:h-[600px] bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
        <div>
          <h3 className="avenir-600 text-2xl sm:text-3xl text-typography-main flex items-center gap-1.5">
            {project.title}
            <span className="inline-block h-2 w-2 bg-primary flex-shrink-0" />
          </h3>
          <p className="avenir-500 text-sm sm:text-base text-slate-600 leading-relaxed mt-4">
            {project.description}
          </p>
        </div>

        <div className="avenir-500 mt-8 pt-4">
          <Button
            label="View live project"
            variant="dark"
            icon="arrow-up-right"
            size="lg"
            className="w-full justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandProjectCard;
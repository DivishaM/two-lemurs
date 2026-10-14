import { Download } from 'lucide-react';
import { brandProjects } from '../../../data/brandProjects';
import { BrandProjectCard } from './BrandProjectCard';
import { Button } from '../../common/Button';
import { RollUpText } from '../../common/RollUpText';
import { useScrollReveal } from '../../../hooks';

export default function BrandSystemSection() {
  const { ref: headingRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="portfolio" className="bg-dark py-16 sm:py-20 lg:py-[92px] text-white">
      <div className="container">

        <div
          ref={headingRef}
          className={`text-center w-full max-w-6xl mx-auto transition-all duration-700 ease-out will-change-transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="gothic-800 text-[28px] sm:text-4xl lg:text-5xl leading-[36px] lg:leading-[56px] text-white">
            <RollUpText
              text="What a complete brand system looks like"
              isVisible={isVisible}
              initialDelay={100}
              delayStep={75}
            />
          </h2>
          <p
            className={`avenir-500 text-slate-400 text-sm sm:text-base lg:text-lg leading-[20px] sm:leading-[28px] mt-4 transition-all duration-700 ease-out will-change-transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Most businesses only get a logo mark. Select a project below to see how we build scalable visual identities end-to-end.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col gap-8 sm:gap-12 lg:gap-16">
          {brandProjects.map((project, index) => (
            <BrandProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex justify-center">
          <Button
            label="Download Full Portfolio"
            variant="dark"
            icon={<Download size={16} />}
            className="border-white/20 hover:border-white/40 hover:bg-white/5"
            size="lg"
          />
        </div>

      </div>
    </section>
  );
}
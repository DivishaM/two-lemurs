import { Download } from 'lucide-react';
import { brandProjects } from '../../../data/brandProjects';
import { BrandProjectCard } from './BrandProjectCard';
import { Button } from '../../common/Button';

export default function BrandSystemSection() {
  return (
    <section id="portfolio" className="bg-dark py-16 sm:py-20 lg:py-28 text-white">
      <div className="container">
        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="gothic-800 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            What a complete brand system looks like
          </h2>
          <p className="avenir-400 text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
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
            size="md"
          />
        </div>

      </div>
    </section>
  );
}

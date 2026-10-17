import { ArrowUpRight } from "lucide-react";
import type { Insight } from "../../../data/insightsData";

interface InsightCardProps {
  insight: Insight;
}

export default function InsightCard({ insight }: InsightCardProps) {
  return (
    <article className="insight-card group flex h-full flex-col border border-neutral-100 bg-white transition-colors duration-300 hover:border-typography-dark">
      <div className="overflow-hidden">
        <img
          src={insight.image}
          alt={`${insight.title} - Insight Article by Two Lemurs`}
          width={400}
          height={250}
          className="insight-card-img w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105 will-change-transform"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex flex-1 flex-col md:p-6 p-4">
        <h3 className="text-base font-medium leading-6 text-typography-dark md:text-xl md:leading-7 avenir-500">
          {insight.title}
        </h3>

        <div className="mt-auto pt-6">
          <div className="mb-4 border-t border-neutral-100" />

          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-normal text-typography-light md:text-sm avenir-400">
              {insight.date}
            </span>

            <a
              href={insight.link}
              title={insight.title}
              className="group/btn inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-typography-dark transition-colors duration-200 hover:text-primary md:text-sm avenir-600"
            >
              <span>Read Insight</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:rotate-45"
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

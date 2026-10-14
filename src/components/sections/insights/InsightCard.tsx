import { ArrowUpRight } from "lucide-react";
import type { Insight } from "../../../data/insightsData";
import { useStaggeredReveal } from "../../../hooks";

interface InsightCardProps {
  insight: Insight;
  index?: number;
}

export default function InsightCard({ insight, index = 0 }: InsightCardProps) {
  const { ref: cardRef, isVisible, delayMs } = useStaggeredReveal<HTMLElement>(index, {
    threshold: 0.1,
    delayStep: 120,
    itemsPerRow: 3,
  });

  return (
    <article
      ref={cardRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`flex h-full flex-col border border-neutral-100 bg-white transition-all duration-700 ease-out will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="overflow-hidden">
        <img
          src={insight.image}
          alt={insight.title}

          className="w-full object-contain transition-transform duration-700 ease-out hover:scale-110"
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
              className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-typography-dark transition-colors duration-200 hover:text-primary md:text-sm avenir-600"
            >
              Read Insight
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

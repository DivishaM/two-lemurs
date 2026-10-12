import { ArrowUpRight } from "lucide-react";
import type { Insight } from "../../../data/insightsData";

interface InsightCardProps {
  insight: Insight;
}

export default function InsightCard({ insight }: InsightCardProps) {
  return (
    <article className="flex h-full flex-col border border-neutral-100 bg-white">
      <div className="overflow-hidden">
        <img
          src={insight.image}
          alt={insight.title}

          className="w-full object-contain transition-transform duration-700 ease-out hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
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

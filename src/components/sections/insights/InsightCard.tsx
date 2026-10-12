import { ArrowUpRight } from "lucide-react";
import type { Insight } from "../../../data/insightsData";

interface InsightCardProps {
  insight: Insight;
}

export default function InsightCard({ insight }: InsightCardProps) {
  return (
    <article className="flex h-full flex-col border border-[#D9DBDD] bg-white">
      <div className="overflow-hidden">
        <img
          src={insight.image}
          alt={insight.title}
          
          className="aspect-[4/3] w-full object-contain transition-transform duration-700 ease-out hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[16px] font-medium leading-[24px] text-[#000912] md:text-[20px] md:leading-[28px]">
          {insight.title}
        </h3>

        <div className="mt-auto pt-5">
          <div className="mb-3 border-t border-[#D9DBDD]" />

          <div className="flex items-center justify-between gap-2">
            <span className="text-[12px] font-normal leading-[18px] text-[#5E686F] md:text-[14px] md:leading-[20px]">
              {insight.date}
            </span>

            <a
              href={insight.link}
              className="inline-flex shrink-0 items-center gap-1 text-[12px] font-semibold leading-[18px] text-[#000912] md:text-[14px] md:leading-[20px]"
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

import { ArrowUpRight } from "lucide-react";
import InsightCard from "./InsightCard";
import { insightsData } from "../../data/insightsData";
import Container from "../common/Container";

export default function InsightsSection() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-24">
      <Container>
        {/* Section Heading */}
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="text-[28px] font-extrabold leading-[36px] text-[#000912] md:text-[48px] md:leading-[58px]">
            Explore Our Insights
          </h2>

          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-2 bg-[#000912] px-4 py-3 text-xs text-white transition-colors hover:bg-[#1F6FD0]"
          >
            Full Insight
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insightsData.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </Container>
    </section>
  );
}
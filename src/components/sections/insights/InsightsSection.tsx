import Button from "../../common/Button";
import InsightCard from "./InsightCard";
import { insightsData } from "../../../data/insightsData";

export default function InsightsSection() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-[128px]">
      <div className="container">
        {/* Section Heading */}
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="text-[28px] font-extrabold leading-[34px] text-[#000912] md:text-[36px] md:leading-tight lg:text-[48px] gothic-800">
            Explore Our Insights
          </h2>

          <Button
            label="Full Insight"
            href="#"
            variant="dark"
            icon="arrow-up-right"
            size="lg"
          />
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insightsData.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </div>
    </section>
  );
}

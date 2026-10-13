import Button from "../../common/Button";
import InsightCard from "./InsightCard";
import { insightsData } from "../../../data/insightsData";

export default function InsightsSection() {
  return (
    <section className="bg-typography-offwhite py-12 md:py-20 xl:py-32">
      <div className="container">
        {/* Section Heading */}
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="font-extrabold text-typography-dark lg:text-5xl lg:leading-[56px] md:text-4xl md:leading-[44px] text-[28px] leading-9 gothic-800 md:text-left text-center mx-auto md:mx-0">
            Explore Our Insights
          </h2>

          <Button
            label="Full Insight"
            href="#"
            variant="dark"
            icon="arrow-up-right"
            size="lg"
            className="hidden md:block"
          />
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insightsData.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>


        <div className="flex justify-center">
          <Button
            label="Full Insight"
            href="#"
            variant="dark"
            icon="arrow-up-right"
            size="lg"
            className="block md:hidden mx-auto mt-10"
          />
        </div>
      </div>
    </section>
  );
}

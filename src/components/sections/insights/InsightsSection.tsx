import { motion } from 'framer-motion';
import Button from "../../common/Button";
import InsightCard from "./InsightCard";
import { insightsData } from "../../../data/insightsData";
import { RollUpText } from "../../common/RollUpText";

export default function InsightsSection() {
  return (
    <section className="bg-typography-offwhite py-12 md:py-20 xl:py-32">
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="mb-10 flex items-center justify-between gap-4"
        >
          <h2 className="font-extrabold text-typography-dark lg:text-5xl lg:leading-[56px] md:text-4xl md:leading-[44px] text-[28px] leading-9 gothic-800 md:text-left text-center mx-auto md:mx-0">
            <RollUpText text="Explore Our Insights" initialDelay={100} delayStep={85} />
          </h2>

          <Button
            label="Full Insight"
            href="#"
            variant="dark"
            icon="arrow-up-right"
            size="lg"
            className="hidden md:block"
          />
        </motion.div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insightsData.map((insight, index) => (
            <InsightCard key={insight.id} insight={insight} index={index} />
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

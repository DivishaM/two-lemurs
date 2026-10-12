import MarqueeItem from "./MarqueeItem";
import { servicesData } from "../../../data/servicesData";

export default function ServicesMarquee() {
  return (
    <section className="overflow-hidden bg-typography-dark py-7">
      <div className="flex w-max animate-marquee items-center gap-9 px-20">
        {[...servicesData, ...servicesData].map((service, index) => (
          <MarqueeItem
            key={`${service}-${index}`}
            title={service}
          />
        ))}
      </div>
    </section>
  );
}

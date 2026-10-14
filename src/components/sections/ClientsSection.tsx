import { motion } from 'framer-motion';
import { clients } from '../../data/clients';
import { RollUpText } from '../common/RollUpText';

const marqueeClients = [...clients, ...clients, ...clients, ...clients];

export default function ClientsSection() {
  return (
    <section className="relative bg-dark py-8 sm:py-0 sm:h-[240px] flex flex-col justify-center overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-28 bg-primary/5 blur-3xl rounded-full" />

      {/* Masked Word Roll-Up Heading */}
      <h2 className="gothic-700 mb-8 sm:mb-7 text-center text-[28px] leading-[36px] text-white">
        <RollUpText text="Clients We Worked For" delayStep={80} />
      </h2>

      {/* Marquee Track with Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
        className="relative w-full flex items-center overflow-hidden sm:h-[120px]"
      >
        {/* Left & Right Smooth Edge Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-28 bg-gradient-to-r from-dark to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-28 bg-gradient-to-l from-dark to-transparent" />

        <div className="flex w-max animate-marquee gap-2.5 sm:gap-3 hover:[animation-play-state:paused] py-2">
          {marqueeClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group flex h-[60px] w-[120px] sm:h-[100px] sm:w-[200px] flex-shrink-0 items-center justify-center border border-white/5 bg-dark-card px-3 sm:px-4 cursor-pointer transition-all duration-300 ease-out hover:border-primary/40 hover:bg-white/[0.06] hover:scale-105 hover:shadow-lg hover:shadow-primary/5"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-[38px] max-w-[84px] sm:max-h-[80px] sm:max-w-[142px] w-auto h-auto object-contain opacity-80 brightness-105 transition-all duration-300 ease-out group-hover:scale-110 group-hover:opacity-100 group-hover:brightness-125"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
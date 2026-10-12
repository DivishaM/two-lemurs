import { clients } from '../../data/clients';

const marqueeClients = [...clients, ...clients, ...clients, ...clients];

export default function ClientsSection() {
  return (
    <section className="bg-dark h-[240px] flex flex-col justify-center overflow-hidden">
      <h2 className="gothic-700 mb-6 sm:mb-7 text-center text-xl sm:text-[28px] text-white">
        Clients We Worked For
      </h2>

      <div className="relative w-full h-[120px] flex items-center overflow-hidden">
        {/* Left & Right Smooth Edge Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-dark to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-dark to-transparent" />

        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {marqueeClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex h-[100px] w-[200px] flex-shrink-0 items-center justify-center border border-white/5 bg-dark-card px-4"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-[80px] max-w-[142px] w-auto h-auto object-contain opacity-90 brightness-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
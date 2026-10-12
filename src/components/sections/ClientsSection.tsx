import { clients } from '../../data/clients';

const marqueeClients = [...clients, ...clients];

export default function ClientsSection() {
  return (
    <section className="bg-dark py-12 sm:py-16 overflow-hidden">
      <h2 className="gothic-800 mb-8 text-center text-xl text-white sm:text-2xl lg:text-3xl">
        Clients We Worked For
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Left & Right Smooth Edge Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-dark to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-dark to-transparent" />

        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {marqueeClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex h-24 w-52 sm:w-56 flex-shrink-0 items-center justify-center border border-white/5 bg-dark-card px-6"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 sm:max-h-14 max-w-full object-contain opacity-90 brightness-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

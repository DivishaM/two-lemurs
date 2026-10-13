import ContactForm from "./ContactForm";
import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-typography-dark py-12 md:py-20 xl:py-32 text-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 2xl:gap-16 gap-8">

        {/* Left Content */}
        <div>
          <h2 className="font-extrabold text-white lg:text-5xl lg:leading-[56px] md:text-4xl md:leading-[44px] text-[28px] leading-9 gothic-800">
            Have a good
            <br />
            problem for us?
          </h2>

          <p className="mt-3 text-sm font-medium leading-5 text-typography-light md:text-lg md:leading-7 avenir-500 max-w-[400px]">
            Tell us where you are, where you want to go,
            and what is standing in the way.
          </p>

          <div className="lg:mt-16 mt-8">
            <p className="text-sm font-medium text-white md:text-lg avenir-400">
              Prefer speaking with our team directly?
            </p>

            <div className="mt-5 flex flex-wrap lg:gap-6 gap-3">
              <a
                href="tel:+61255503559"
                title="+61 255 503 559"
                className="group flex items-center gap-2"
              >
                <span className="flex size-9 items-center justify-center border border-[#29353E] transition-colors duration-300 group-hover:bg-[#35434D]">
                  <Phone
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-rotate-12"
                  />
                </span>
                <span className="text-sm font-medium text-white md:text-base avenir-400">
                  +61 255 503 559
                </span>
              </a>

              <a
                href="mailto:info@twolemurs.com"
                title="info@twolemurs.com"
                className="group flex items-center gap-2"
              >
                <span className="flex size-9 items-center justify-center border border-[#29353E] transition-colors duration-300 group-hover:bg-[#35434D]">
                  <Mail
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-rotate-12"
                  />
                </span>
                <span className="text-sm font-medium text-white md:text-base avenir-400">
                  info@twolemurs.com
                </span>
              </a>
            </div>

          </div>
        </div>

        {/* Right Form */}
        <ContactForm />

      </div>
    </section>
  );
}

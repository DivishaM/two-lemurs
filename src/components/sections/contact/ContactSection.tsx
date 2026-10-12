import ContactForm from "./ContactForm";
import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#000912] py-16 text-white md:py-24">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">

        {/* Left Content */}
        <div>
          <h2 className="max-w-md text-[28px] font-extrabold leading-[36px] text-[#FAFAFA] md:text-[48px] md:leading-[56px]">
            Have a good
            <br />
            problem for us?
          </h2>

          <p className="mt-3 max-w-md text-[14px] font-medium leading-[20px] text-[#5E686F] md:text-[18px] md:leading-[28px]">
            Tell us where you are, where you want to go,
            and what is standing in the way.
          </p>

          <div className="mt-12">
            <p className="text-[14px] font-medium leading-[20px] text-white md:text-[18px] md:leading-[28px]">
              Prefer speaking with our team directly?
            </p>

            <div className="mt-5 flex flex-wrap gap-6">
              <a
                href="tel:+61255503559"
                className="group flex items-center gap-2"
              >
                <span className="flex size-9 items-center justify-center border border-[#29353E] transition-colors duration-300 group-hover:bg-[#35434D]">
                  <Phone
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-rotate-[12deg]"
                  />
                </span>
                <span className="text-[14px] font-normal leading-5 text-white md:text-[16px] md:leading-6">
                  +61 255 503 559
                </span>
              </a>

              <a
                href="mailto:info@twolemurs.com"
                className="group flex items-center gap-2"
              >
                <span className="flex size-9 items-center justify-center border border-[#29353E] transition-colors duration-300 group-hover:bg-[#35434D]">
                  <Mail
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-rotate-[12deg]"
                  />
                </span>
                <span className="text-[14px] font-normal leading-5 text-white md:text-[16px] md:leading-6">
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

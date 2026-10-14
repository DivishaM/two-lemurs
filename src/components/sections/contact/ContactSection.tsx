import { motion } from 'framer-motion';
import ContactForm from "./ContactForm";
import { Phone, Mail } from "lucide-react";
import { RollUpText } from "../../common/RollUpText";

export default function ContactSection() {
  return (
    <section className="bg-typography-dark py-12 md:py-20 xl:py-32 text-white overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 2xl:gap-16 gap-8">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <h2 className="font-extrabold text-white lg:text-5xl lg:leading-[56px] md:text-4xl md:leading-[44px] text-[28px] leading-9 gothic-800">
            <span className="block">
              <RollUpText text="Have a good" initialDelay={100} delayStep={80} />
            </span>
            <span className="block">
              <RollUpText text="problem for us?" initialDelay={340} delayStep={80} />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-3 text-sm font-medium leading-5 text-typography-light md:text-lg md:leading-7 avenir-500 max-w-[400px]"
          >
            Tell us where you are, where you want to go,
            and what is standing in the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
            className="lg:mt-16 mt-8"
          >
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

          </motion.div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <ContactForm />
        </motion.div>

      </div>
    </section>
  );
}

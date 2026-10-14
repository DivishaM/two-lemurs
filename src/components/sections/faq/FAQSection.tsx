import { useState } from "react";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";
import { faqData } from "../../../data/faqData";
import { RollUpText } from "../../common/RollUpText";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="bg-typography-offwhite py-12 md:py-20 xl:py-32">
            <div className="container">
                <div className="grid grid-cols-1 2xl:gap-10 gap-3 lg:grid-cols-2">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                        <h2 className="font-extrabold text-typography-dark lg:text-5xl lg:leading-[56px] md:text-4xl md:leading-[44px] text-[28px] leading-9 gothic-800">
                            <span className="block">
                                <RollUpText text="Frequently Asked" initialDelay={100} delayStep={85} />
                            </span>
                            <span className="block">
                                <RollUpText text="Questions" initialDelay={270} delayStep={85} />
                            </span>
                        </h2>

                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                            className="mt-3 text-sm font-medium text-typography-light md:text-base lg:text-lg avenir-500 max-w-[450px] w-[90%]"
                        >
                            Lorem ipsum dolor sit amet consectetur. Quisque
                            pulvinar quam metus lacus. Cursus pharetra
                        </motion.p>
                    </motion.div>

                    {/* Right FAQ List */}
                    <div className="min-h-[420px]">
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={item.id}
                                item={item}
                                index={index}
                                isOpen={openIndex === index}
                                onToggle={() =>
                                    setOpenIndex(
                                        openIndex === index ? null : index
                                    )
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

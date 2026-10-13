import { useState } from "react";
import FAQItem from "./FAQItem";
import { faqData } from "../../../data/faqData";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="bg-typography-offwhite py-12 md:py-20 xl:py-32">
            <div className="container">
                <div className="grid grid-cols-1 2xl:gap-10 gap-3 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        <h2 className="font-extrabold text-typography-dark lg:text-5xl lg:leading-[56px] md:text-4xl md:leading-[44px] text-[28px] leading-9 gothic-800">
                            Frequently Asked
                            <br />
                            Questions
                        </h2>

                        <p className="mt-3 text-sm font-medium text-typography-light md:text-base lg:text-lg avenir-500 max-w-[450px] w-[90%]">
                            Lorem ipsum dolor sit amet consectetur. Quisque
                            pulvinar quam metus lacus. Cursus pharetra
                        </p>
                    </div>

                    {/* Right FAQ List */}
                    <div className="min-h-[420px]">
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={item.id}
                                item={item}
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

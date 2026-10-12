import { useState } from "react";
import FAQItem from "./FAQItem";
import { faqData } from "../../../data/faqData";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="bg-[#FAFAFA] py-16 md:py-[128px]">
            <div className="container">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-[28px] font-extrabold leading-[34px] text-[#000912] md:text-[36px] md:leading-tight lg:text-[48px] gothic-800">
                            Frequently Asked
                            <br className="hidden md:block" />
                            Questions
                        </h2>

                        <p className="mt-3 text-lg font-medium text-typography-light md:text-[16px] lg:text-[18px] avenir-500 max-w-[450px]">
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

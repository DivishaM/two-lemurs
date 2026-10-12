import { useState } from "react";
import FAQItem from "./FAQItem";
import { faqData } from "../../../data/faqData";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="bg-[#FAFAFA] py-16 md:py-24">
            <div className="container">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
                    {/* Left Content */}
                    <div>
                        <h2 className="max-w-xl text-[28px] font-extrabold leading-[34px] text-[#000912] md:text-[36px] md:leading-tight lg:text-[48px]">
                            Frequently Asked
                            <br className="hidden md:block" />
                            Questions
                        </h2>

                        <p className="mt-3 max-w-lg text-[14px] font-medium leading-[22px] text-[#5E686F] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[28px]">
                            Lorem ipsum dolor sit amet consectetur. Quisque
                            pulvinar quam metus lacus. Cursus pharetra
                        </p>
                    </div>

                    {/* Right FAQ List */}
                    <div>
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

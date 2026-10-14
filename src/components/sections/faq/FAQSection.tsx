import FAQItem from "./FAQItem";
import { faqData } from "../../../data/faqData";
import { RollUpText } from "../../common/RollUpText";
import { useScrollReveal, useAccordion } from "../../../hooks";

export default function FAQSection() {
    const { isOpen, toggleIndex } = useAccordion();
    const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

    return (
        <section ref={sectionRef} id="faq" className="bg-typography-offwhite py-12 md:py-20 xl:py-32">
            <div className="container">
                <div className="grid grid-cols-1 2xl:gap-10 gap-3 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className={`transition-all duration-700 ease-out will-change-transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}>
                        <h2 className="font-extrabold text-typography-dark lg:text-5xl lg:leading-[56px] md:text-4xl md:leading-[44px] text-[28px] leading-9 gothic-800">
                            <span className="block">
                                <RollUpText text="Frequently Asked" isVisible={isVisible} initialDelay={100} delayStep={85} />
                            </span>
                            <span className="block">
                                <RollUpText text="Questions" isVisible={isVisible} initialDelay={270} delayStep={85} />
                            </span>
                        </h2>

                        <p
                            className={`mt-3 text-sm font-medium text-typography-light md:text-base lg:text-lg avenir-500 max-w-[450px] w-[90%] transition-all duration-700 ease-out will-change-transform ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: '350ms' }}
                        >
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
                                index={index}
                                isSectionVisible={isVisible}
                                isOpen={isOpen(index)}
                                onToggle={() => toggleIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

import type { ProcessStepData } from "../../../data/processData";
import { useStaggeredReveal } from "../../../hooks";

interface ProcessStepProps {
    step: ProcessStepData;
    index?: number;
}

export default function ProcessStep({ step, index = 0 }: ProcessStepProps) {
    const { ref: stepRef, isVisible, delayMs, subDelayMs } = useStaggeredReveal<HTMLElement>(index, {
        threshold: 0.15,
        delayStep: 120,
        itemsPerRow: 4,
    });

    return (
        <article
            ref={stepRef}
            style={{ transitionDelay: `${delayMs}ms` }}
            className={`group relative flex flex-col overflow-hidden border-l border-t border-b border-neutral-100 bg-white p-5 sm:p-[30px] cursor-pointer transition-all duration-700 ease-out will-change-transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
            {/* Animated background */}
            <div className="absolute inset-0 translate-y-[101%] bg-typography-dark transition-transform duration-500 ease-in-out group-hover:translate-y-0" />

            <span className="relative z-10 flex size-12 items-center justify-center border border-typography-dark text-sm md:text-base font-bold avenir-700 text-typography-dark transition-colors duration-400 group-hover:border-white group-hover:text-white group-hover:-rotate-6">
                {step.number}
            </span>

            <div className="lg:mt-[158px] mt-[100px]">
                <h3 className="relative z-10 text-[22px] md:text-[26px] leading-tight text-typography-dark transition-colors duration-300 group-hover:text-white avenir-600">
                    {step.title}
                </h3>

                <p
                    className={`relative z-10 mt-3 text-sm md:text-base text-typography-light transition-colors duration-300 group-hover:text-white avenir-400 transition-all duration-700 ease-out will-change-transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                    }`}
                    style={{ transitionDelay: `${subDelayMs(180)}ms` }}
                >
                    {step.description}
                </p>
            </div>
        </article>
    );
}

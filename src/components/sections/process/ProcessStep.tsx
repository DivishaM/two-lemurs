import type { ProcessStepData } from "../../../data/processData";

interface ProcessStepProps {
    step: ProcessStepData;
}

export default function ProcessStep({ step }: ProcessStepProps) {
    return (
        <article className="group relative flex flex-col overflow-hidden border-l border-t border-b border-neutral-100 bg-white p-5 sm:p-[30px] cursor-pointer">
            {/* Animated background */}
            <div className="absolute inset-0 translate-y-[101%] bg-typography-dark transition-transform duration-500 ease-in-out group-hover:translate-y-0" />

            <span className="relative z-10 flex size-12 items-center justify-center border border-typography-dark text-[14px] md:text-base font-bold avenir-700 text-typography-dark transition-colors duration-400 group-hover:border-white group-hover:text-white group-hover:-rotate-6">
                {step.number}
            </span>

            <div className="mt-[158px]">
                <h3 className="relative z-10 text-[22px] md:text-[26px] leading-tight text-typography-dark transition-colors duration-300 group-hover:text-white avenir-600">
                    {step.title}
                </h3>

                <p className="relative z-10 mt-3 text-sm md:text-base text-typography-light transition-colors duration-300 group-hover:text-white avenir-400">
                    {step.description}
                </p>
            </div>
        </article>
    );
}

import type { ProcessStepData } from "../../../data/processData";

interface ProcessStepProps {
    step: ProcessStepData;
}

export default function ProcessStep({ step }: ProcessStepProps) {
    return (
        <article className="group relative flex h-[391px] flex-col overflow-hidden border border-[#D9DBDD] bg-white p-5 sm:p-6">
            {/* Animated background */}
            <div className="absolute inset-0 translate-y-full bg-[#020B14] transition-transform duration-500 ease-in-out group-hover:translate-y-0" />

            <span className="relative z-10 flex size-12 items-center justify-center border border-[#000912] text-[14px] md:text-[16px] font-bold leading-6 text-[#000912] transition-colors duration-300 group-hover:border-white group-hover:text-white">
                {step.number}
            </span>

            <div className="mt-auto pt-10">
                <h3 className="relative z-10 text-[22px] md:text-[26px] font-semibold leading-tight text-[#000912] transition-colors duration-300 group-hover:text-white">
                    {step.title}
                </h3>

                <p className="relative z-10 mt-3 text-[14px] md:text-[16px] font-medium leading-5 text-[#5E686F] transition-colors duration-300 group-hover:text-[#D1D5DB]">
                    {step.description}
                </p>
            </div>
        </article>
    );
}

import { motion } from 'framer-motion';
import type { ProcessStepData } from "../../../data/processData";

interface ProcessStepProps {
    step: ProcessStepData;
    index?: number;
}

export default function ProcessStep({ step, index = 0 }: ProcessStepProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.2, 0.7, 0.2, 1],
            }}
            className="group relative flex flex-col overflow-hidden border-l border-t border-b border-neutral-100 bg-white p-5 sm:p-[30px] cursor-pointer"
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

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.1 + 0.18,
                        ease: [0.2, 0.7, 0.2, 1] as const,
                    }}
                    className="relative z-10 mt-3 text-sm md:text-base text-typography-light transition-colors duration-300 group-hover:text-white avenir-400"
                >
                    {step.description}
                </motion.p>
            </div>
        </motion.article>
    );
}

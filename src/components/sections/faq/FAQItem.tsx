import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";
import type { FAQ } from "../../../data/faqData";

interface FAQItemProps {
    item: FAQ;
    index?: number;
    isOpen: boolean;
    onToggle: () => void;
}

export default function FAQItem({
    item,
    index = 0,
    isOpen,
    onToggle,
}: FAQItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.6,
                delay: 0.15 + index * 0.08,
                ease: [0.2, 0.7, 0.2, 1] as const,
            }}
            className="border-b border-neutral-100"
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3 py-4 text-left md:py-5 cursor-pointer group"
            >
                <span className="flex items-center text-sm font-bold text-primary avenir-700">
                    {item.id}
                </span>

                <span className="flex flex-1 items-center text-sm font-semibold text-typography-dark md:text-base lg:text-lg xl:text-xl avenir-600 transition-colors duration-200">
                    {item.question}
                </span>

                {/* Desktop/Tablet: Arrow */}
                <ChevronDown
                    size={16}
                    className={`hidden shrink-0 transition-transform duration-300 md:block ${
                        isOpen ? "rotate-180 text-primary" : "text-typography-dark"
                    }`}
                />

                {/* Mobile: Plus only */}
                <Plus
                    size={16}
                    className={`shrink-0 md:hidden transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-primary" : "text-typography-dark"
                    }`}
                />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] as const }}
                        className="overflow-hidden"
                    >
                        <div className="pb-5 pl-8 pr-6 text-typography-light md:text-base lg:text-lg text-sm avenir-400">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

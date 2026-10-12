import { ChevronDown, Plus } from "lucide-react";
import type { FAQ } from "../../../data/faqData";

interface FAQItemProps {
    item: FAQ;
    isOpen: boolean;
    onToggle: () => void;
}

export default function FAQItem({
    item,
    isOpen,
    onToggle,
}: FAQItemProps) {
    return (
        <div className="border-b border-neutral-100">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3 py-4 text-left md:py-5"
            >
                <span className="flex items-center text-sm font-bold text-primary avenir-700">
                    {item.id}
                </span>

                <span className="flex flex-1 items-center font-semibold text-[#000912] md:text-base lg:text-xl text-sm avenir-600">
                    {item.question}
                </span>

                {/* Desktop/Tablet: Arrow */}
                <ChevronDown
                    size={16}
                    className={`hidden shrink-0 transition-transform duration-300 md:block ${isOpen ? "rotate-180" : ""
                        }`}
                />

                {/* Mobile: Plus only */}
                <Plus
                    size={16}
                    className="shrink-0 md:hidden"
                />
            </button>

            {isOpen && (
                <div className="pb-5 pl-8 pr-6 text-sm text-typography-light md:text-base lg:text-lg text-sm avenir-400">
                    {item.answer}
                </div>
            )}
        </div>
    );
}

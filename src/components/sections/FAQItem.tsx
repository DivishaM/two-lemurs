
import { ChevronDown, Plus } from "lucide-react";
import type { FAQ } from "../../data/faqData";

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
        <div className="border-b border-[#D9DBDD]">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3 py-4 text-left md:py-5"
            >
                <span className="flex items-center text-[12px] font-bold text-[#1F6FD0]">
                    {item.id}
                </span>

                <span className="flex flex-1 items-center text-[14px] font-semibold leading-[20px] text-[#000912] md:text-[16px] md:leading-[22px] lg:text-[20px] lg:leading-[22px]">
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
                <div className="pb-5 pl-8 pr-6 text-sm leading-6 text-[#5E686F]">
                    {item.answer}
                </div>
            )}
        </div>
    );
}

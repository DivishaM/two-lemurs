import { ChevronDown, Plus } from "lucide-react";
import type { FAQ } from "../../../data/faqData";

interface FAQItemProps {
    item: FAQ;
    index?: number;
    isSectionVisible?: boolean;
    isOpen: boolean;
    onToggle: () => void;
}

export default function FAQItem({
    item,
    index = 0,
    isSectionVisible = true,
    isOpen,
    onToggle,
}: FAQItemProps) {
    return (
        <div
            style={{ transitionDelay: `${index * 80 + 150}ms` }}
            className={`border-b border-neutral-100 transition-all duration-700 ease-out will-change-transform ${
                isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
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

                <span className="flex flex-1 items-center text-sm font-semibold text-typography-dark md:text-base lg:text-lg xl:text-xl avenir-600 transition-colors duration-200 group-hover:text-primary">
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

            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className="overflow-hidden">
                    <div className="pb-5 pl-8 pr-6 text-typography-light md:text-base lg:text-lg text-sm avenir-400">
                        {item.answer}
                    </div>
                </div>
            </div>
        </div>
    );
}

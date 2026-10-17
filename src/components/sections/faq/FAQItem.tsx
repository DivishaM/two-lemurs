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
    <div className="border-b border-neutral-100 transition-colors duration-300">
      <h3 className="m-0 p-0 font-normal">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="group flex w-full items-center gap-3 py-4 text-left md:py-5 cursor-pointer select-none"
        >
          <span
            className={`flex items-center text-sm font-bold avenir-700 transition-colors duration-300 ${
              isOpen ? "text-primary" : "text-primary/70 group-hover:text-primary"
            }`}
          >
            {item.id}
          </span>

          <span
            className={`flex flex-1 items-center text-sm font-semibold text-typography-dark md:text-base lg:text-lg xl:text-xl avenir-600 transition-transform duration-300 ${
              isOpen ? "translate-x-1.5" : "group-hover:translate-x-0.5"
            }`}
          >
            {item.question}
          </span>

          {/* Desktop/Tablet: Arrow with smooth rotation */}
          <ChevronDown
            size={16}
            className={`hidden shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] md:block ${
              isOpen
                ? "rotate-180 text-primary"
                : "text-neutral-400 group-hover:text-typography-dark"
            }`}
          />

          {/* Mobile: Plus only */}
          <Plus
            size={16}
            className={`shrink-0 md:hidden transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
              isOpen ? "rotate-45 text-primary" : "text-neutral-400"
            }`}
          />
        </button>
      </h3>

      {/* Smooth Accordion Expansion (like demo1) */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`pb-5 pl-8 pr-6 text-sm text-typography-light md:text-base lg:text-lg avenir-400 transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}


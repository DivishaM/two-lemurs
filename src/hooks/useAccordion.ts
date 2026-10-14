import { useState, useCallback } from 'react';

interface UseAccordionOptions {
  defaultOpenIndex?: number | null;
  allowMultiple?: boolean;
}

export function useAccordion(options: UseAccordionOptions = {}) {
  const { defaultOpenIndex = null, allowMultiple = false } = options;
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    defaultOpenIndex !== null ? [defaultOpenIndex] : []
  );

  const toggleIndex = useCallback(
    (index: number) => {
      setOpenIndexes((prev) => {
        if (prev.includes(index)) {
          return allowMultiple ? prev.filter((i) => i !== index) : [];
        } else {
          return allowMultiple ? [...prev, index] : [index];
        }
      });
    },
    [allowMultiple]
  );

  const isOpen = useCallback(
    (index: number) => openIndexes.includes(index),
    [openIndexes]
  );

  const openIndex = openIndexes.length > 0 ? openIndexes[0] : null;

  return {
    openIndex,
    openIndexes,
    toggleIndex,
    isOpen,
  };
}

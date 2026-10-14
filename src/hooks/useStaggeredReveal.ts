import { useScrollReveal } from './useScrollReveal';

interface UseStaggeredRevealOptions {
  threshold?: number;
  delayStep?: number;
  baseDelay?: number;
  itemsPerRow?: number;
}

export function useStaggeredReveal<T extends HTMLElement = HTMLElement>(
  index: number = 0,
  options: UseStaggeredRevealOptions = {}
) {
  const {
    threshold = 0.12,
    delayStep = 100,
    baseDelay = 0,
    itemsPerRow = 3,
  } = options;

  const { ref, isVisible } = useScrollReveal<T>({ threshold });

  const delayMs = (index % itemsPerRow) * delayStep + baseDelay;
  const subDelayMs = (additionalMs: number) => delayMs + additionalMs;

  return {
    ref,
    isVisible,
    delayMs,
    subDelayMs,
  };
}

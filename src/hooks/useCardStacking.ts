import { useState, useEffect, type RefObject } from 'react';

interface UseCardStackingOptions {
  minScale?: number;
  minBrightness?: number;
  scrollDistance?: number;
  maxImageParallax?: number;
}

export function useCardStacking<T extends HTMLElement = HTMLElement>(
  targetRef: RefObject<T | null>,
  options: UseCardStackingOptions = {}
) {
  const {
    minScale = 0.93,
    minBrightness = 0.72,
    scrollDistance = 1200,
    maxImageParallax = 16,
  } = options;

  const [cardScale, setCardScale] = useState(1);
  const [cardBrightness, setCardBrightness] = useState(1);
  const [imageOffset, setImageOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!targetRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (targetRef.current) {
            const rect = targetRef.current.getBoundingClientRect();
            const stickyTop = window.innerWidth >= 1024 ? 112 : 96;
            const pastSticky = Math.max(0, stickyTop - rect.top);

            const newScale = Math.max(
              minScale,
              1 - (pastSticky / scrollDistance) * (1 - minScale)
            );
            const newBrightness = Math.max(
              minBrightness,
              1 - (pastSticky / scrollDistance) * (1 - minBrightness)
            );

            setCardScale(newScale);
            setCardBrightness(newBrightness);

            // Calculate image parallax offset inside frame
            const vHeight = window.innerHeight;
            const progress = (vHeight - rect.top) / (vHeight + rect.height);
            const offset = (progress - 0.5) * (maxImageParallax * 1.5);
            setImageOffset(
              Math.max(-maxImageParallax, Math.min(maxImageParallax, offset))
            );
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetRef, minScale, minBrightness, scrollDistance, maxImageParallax]);

  return { cardScale, cardBrightness, imageOffset };
}

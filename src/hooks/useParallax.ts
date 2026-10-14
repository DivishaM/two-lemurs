import { useState, useEffect } from 'react';

interface UseParallaxOptions {
  contentSpeed?: number;
  imageSpeed?: number;
  fadeDistance?: number;
  maxScrollRatio?: number;
  maxScaleGrowth?: number;
  scaleDistance?: number;
}

export function useParallax(options: UseParallaxOptions = {}) {
  const {
    contentSpeed = 0.22,
    imageSpeed = 0.1,
    fadeDistance = 600,
    maxScrollRatio = 1.5,
    maxScaleGrowth = 0.18,
    scaleDistance = 800,
  } = options;

  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < window.innerHeight * maxScrollRatio) {
            setScrollY(window.scrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxScrollRatio]);

  const contentTranslate = scrollY * contentSpeed;
  const imageTranslate = scrollY * imageSpeed;
  const imageScale = 1 + Math.min(scrollY / scaleDistance, 1) * maxScaleGrowth;
  const contentOpacity = Math.max(0, 1 - scrollY / fadeDistance);

  return {
    isLoaded,
    scrollY,
    contentTranslate,
    imageTranslate,
    imageScale,
    contentOpacity,
  };
}

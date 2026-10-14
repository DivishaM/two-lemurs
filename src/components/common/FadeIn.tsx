import React from 'react';
import { motion } from 'framer-motion';

export type FadeDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: FadeDirection;
  distance?: number;
  className?: string;
  as?: 'div' | 'p' | 'span' | 'article' | 'section';
  viewportAmount?: number | 'some' | 'all';
  once?: boolean;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
}

export const standardEase = [0.2, 0.7, 0.2, 1] as const;

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 18,
  className = '',
  as = 'div',
  viewportAmount = 0.15,
  once = true,
  style,
  onClick,
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialOffset();

  const motionComponentMap = {
    div: motion.div,
    p: motion.p,
    span: motion.span,
    article: motion.article,
    section: motion.section,
  };

  const Component = motionComponentMap[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: viewportAmount }}
      transition={{
        duration,
        delay,
        ease: standardEase,
      }}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default FadeIn;

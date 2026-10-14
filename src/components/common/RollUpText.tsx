import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface RollUpTextProps {
  text?: string;
  words?: string[];
  isVisible?: boolean;
  className?: string;
  wordClassName?: string;
  delayStep?: number;
  initialDelay?: number;
  duration?: number;
  accentDot?: boolean;
}

export const RollUpText: React.FC<RollUpTextProps> = ({
  text,
  words: customWords,
  isVisible,
  className = '',
  wordClassName = '',
  delayStep = 75,
  initialDelay = 100,
  duration = 700,
  accentDot = false,
}) => {
  const wordsList = customWords || (text ? text.split(' ') : []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: initialDelay / 1000,
        staggerChildren: delayStep / 1000,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: '120%' },
    visible: {
      y: '0%',
      transition: {
        duration: duration / 1000,
        ease: [0.2, 0.7, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible !== undefined ? (isVisible ? 'visible' : 'hidden') : undefined}
      whileInView={isVisible === undefined ? 'visible' : undefined}
      viewport={{ once: true, amount: 0.2 }}
    >
      {wordsList.map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0"
        >
          <motion.span
            variants={wordVariants}
            className={`inline-block will-change-transform ${wordClassName}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
      {accentDot && (
        <span className="inline-block h-2 w-2 bg-primary ml-1.5 align-middle flex-shrink-0 animate-pulse" />
      )}
    </motion.span>
  );
};

export default RollUpText;

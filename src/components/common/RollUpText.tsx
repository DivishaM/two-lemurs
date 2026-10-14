import React from 'react';

interface RollUpTextProps {
  text?: string;
  words?: string[];
  isVisible: boolean;
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
  delayStep = 70,
  initialDelay = 0,
  duration = 700,
  accentDot = false,
}) => {
  const wordsList = customWords || (text ? text.split(' ') : []);

  return (
    <span className={`inline-block ${className}`}>
      {wordsList.map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0"
        >
          <span
            className={`inline-block transition-transform ease-out will-change-transform ${wordClassName}`}
            style={{
              transform: isVisible ? 'translateY(0%)' : 'translateY(120%)',
              transitionDuration: `${duration}ms`,
              transitionDelay: `${initialDelay + index * delayStep}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
      {accentDot && (
        <span className="inline-block h-2 w-2 bg-primary ml-1.5 align-middle flex-shrink-0 animate-pulse" />
      )}
    </span>
  );
};

export default RollUpText;

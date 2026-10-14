import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import type { BrandProject } from '../../../data/brandProjects';
import { Button } from '../../common/Button';
import { RollUpText } from '../../common/RollUpText';

interface BrandProjectCardProps {
  project: BrandProject;
  index: number;
}

export const BrandProjectCard: React.FC<BrandProjectCardProps> = ({
  project,
  index,
}) => {
  const isReversed = index % 2 === 1;
  const cardRef = useRef<HTMLDivElement>(null);

  // Framer Motion Sticky Stacking (Scale + Brightness Scrub)
  const { scrollYProgress: cardProgress } = useScroll({
    target: cardRef,
    offset: ['start 112px', 'end start'],
  });
  const scale = useTransform(cardProgress, [0, 1], [1, 0.93]);
  const brightness = useTransform(cardProgress, [0, 1], [1, 0.72]);
  const filter = useMotionTemplate`brightness(${brightness})`;

  // Image Parallax inside frame
  const { scrollYProgress: imgProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(imgProgress, [0, 1], [-16, 16]);

  // Mouse Spotlight
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        scale,
        filter,
        transformOrigin: 'top center',
      }}
      className={`relative group sticky top-24 lg:top-28 border border-white/10 bg-dark-card p-4 sm:p-6 lg:p-[20px] flex flex-col ${
        isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-stretch gap-6 sm:gap-8 lg:gap-5 shadow-2xl w-full mx-auto overflow-hidden`}
    >
      {/* Outer Card Mouse Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 60%)`,
        }}
      />

      {/* Image Container with Parallax */}
      <div className="relative w-full lg:w-[68%] xl:w-[70%] aspect-[856/600] flex items-center justify-center overflow-hidden bg-black/30 flex-shrink-0">
        <motion.img
          src={project.image}
          alt={project.title}
          style={{ y: imageY }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover will-change-transform"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Text Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
        className="relative w-full lg:flex-1 bg-white lg:p-6 p-4 flex flex-col justify-between min-w-0 overflow-hidden"
      >

        {/* Text Card Mouse Glow */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(20,184,166,0.07), transparent 70%)`,
          }}
        />

        <div className="relative z-10">
          <h3 className="avenir-600 text-xl sm:text-2xl leading-[28px] sm:leading-[32px] text-typography-main">
            <RollUpText text={project.title} initialDelay={200} accentDot />
          </h3>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.2, 0.7, 0.2, 1] as const,
            }}
            className="avenir-500 text-sm sm:text-base text-slate-600 leading-[20px] sm:leading-[24px] mt-4"
          >
            {project.description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.45,
            ease: [0.2, 0.7, 0.2, 1] as const,
          }}
          className="relative z-10 avenir-500 mt-8 pt-4"
        >
          <Button
            label="View live project"
            variant="dark"
            icon="arrow-up-right"
            size="md"
            className="w-full justify-center group-hover:bg-black group-hover:shadow-md transition-all duration-300"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BrandProjectCard;
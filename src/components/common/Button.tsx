import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import gsap from 'gsap';
import { createRipple } from '../../utils/effects';

export type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
  href?: string;
  target?: string;
  rel?: string;
  icon?: 'arrow-up-right' | 'arrow-down-right' | React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  href,
  target,
  rel,
  icon,
  iconPosition = 'right',
  className = '',
  size = 'md',
  magnetic = true,
  onClick,
  ...props
}) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el || !magnetic) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const qx = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
    const qy = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.32;
      qx(x);
      qy(y);
    };

    const handleMouseLeave = () => {
      qx(0);
      qy(0);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      qx(0);
      qy(0);
    };
  }, [magnetic]);

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-primary hover:bg-primary-hover text-white shadow-sm hover:shadow-primary/30 border border-transparent',
    secondary:
      'bg-transparent hover:bg-gray-100 text-typography-main border border-surface-border',
    dark:
      'bg-dark hover:bg-black text-white border border-white/10 shadow-sm hover:border-white/30',
    outline:
      'bg-transparent hover:bg-primary/5 text-primary border border-primary',
    ghost:
      'bg-transparent hover:bg-gray-100 text-typography-main border-transparent',
  };

  const sizeStyles: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 avenir-500',
    md: 'px-5 py-2.5 text-sm sm:text-base gap-2 avenir-500',
    lg: 'px-6 py-3 sm:text-base gap-2.5 avenir-500',
  };

  const baseStyles =
    'relative overflow-hidden inline-flex items-center justify-center whitespace-nowrap transition-[background-color,border-color,box-shadow,color] duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98] will-change-transform';

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  const handlePointerDown = (e: React.PointerEvent<HTMLElement>) => {
    createRipple(e);
  };

  const renderIcon = () => {
    if (!icon) return null;
    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16;

    if (icon === 'arrow-up-right') {
      return (
        <ArrowUpRight
          size={iconSize}
          className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:rotate-45"
        />
      );
    }
    if (icon === 'arrow-down-right') {
      return (
        <ArrowDownRight
          size={iconSize}
          className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:rotate-45"
        />
      );
    }
    return <span className="inline-flex items-center">{icon}</span>;
  };

  const content = (
    <span className="relative z-10 inline-flex items-center gap-2 group pointer-events-none">
      {icon && iconPosition === 'left' && renderIcon()}
      <span>{label}</span>
      {icon && iconPosition === 'right' && renderIcon()}
    </span>
  );

  if (href) {
    return (
      <a
        ref={(el) => {
          elementRef.current = el;
        }}
        href={href}
        target={target}
        rel={rel}
        onPointerDown={handlePointerDown}
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={(el) => {
        elementRef.current = el;
      }}
      className={combinedClasses}
      onPointerDown={handlePointerDown}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
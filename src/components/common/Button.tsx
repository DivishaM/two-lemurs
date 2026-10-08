import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

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
  ...props
}) => {
  // Variant styles mapped to global design tokens
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-primary hover:bg-primary-hover text-white shadow-sm border border-transparent',
    secondary:
      'bg-transparent hover:bg-gray-100 text-typography-main border border-surface-border',
    dark:
      'bg-dark hover:bg-black text-white border border-white/10 shadow-sm',
    outline:
      'bg-transparent hover:bg-primary/5 text-primary border border-primary',
    ghost:
      'bg-transparent hover:bg-gray-100 text-typography-main border-transparent',
  };

  // Sizing styles
  const sizeStyles: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 rounded-md font-medium',
    md: 'px-5 py-2.5 text-sm gap-2 rounded-lg font-medium',
    lg: 'px-6 py-3 text-base gap-2.5 rounded-lg font-semibold',
  };

  const baseStyles =
    'inline-flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  // Render icon
  const renderIcon = () => {
    if (!icon) return null;
    const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16;

    if (icon === 'arrow-up-right') {
      return <ArrowUpRight size={iconSize} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />;
    }
    if (icon === 'arrow-down-right') {
      return <ArrowDownRight size={iconSize} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />;
    }
    return <span className="inline-flex items-center">{icon}</span>;
  };

  const content = (
    <span className="inline-flex items-center gap-2 group">
      {icon && iconPosition === 'left' && renderIcon()}
      <span>{label}</span>
      {icon && iconPosition === 'right' && renderIcon()}
    </span>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'accent' | 'success';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  animate = false
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';

  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    secondary: 'bg-primary-100 text-primary-800',
    accent: 'bg-accent-100 text-accent-800',
    success: 'bg-green-100 text-green-800',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const BadgeComponent = animate ? motion.span : 'span';

  const animationProps = animate
    ? {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.3, type: "spring" },
        whileHover: { scale: 1.05 },
      }
    : {};

  return (
    <BadgeComponent
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...animationProps}
    >
      {children}
    </BadgeComponent>
  );
};

export default Badge;
'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';

type ButtonBaseProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | 'onAnimationStart'
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd'
  | 'onDragOver'
  | 'onDragEnter'
  | 'onDragLeave'
  | 'onDrop'
  | 'style'
>;

interface ButtonProps extends ButtonBaseProps, MotionProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      disabled = false,
      className = '',
      icon,
      iconPosition = 'left',
      ...props
    },
    ref
  ) => {
    // Base classes
    const baseClasses =
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none';
    // Size classes
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };
    // Variant classes
    const variantClasses = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
      secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
      outline:
        'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-primary-500',
      ghost:
        'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-primary-500',
    };
    // Width classes
    const widthClass = fullWidth ? 'w-full' : '';
    // Loading state
    const loadingIcon = (
      <svg
        className="-ml-1 mr-2 size-4 animate-spin text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
    // Combine all classes
    const buttonClasses =
      `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`.trim();
    // Render icon
    const renderIcon = () => {
      if (isLoading) return loadingIcon;
      if (icon) return <span className={iconPosition === 'left' ? 'mr-2' : 'ml-2'}>{icon}</span>;
      return null;
    };
    // Animated background using Framer Motion
    return (
      <div className="relative inline-block">
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 rounded-lg"
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.08, 1],
            background: [
              'linear-gradient(135deg, #bae6fd 0%, #a78bfa 100%)',
              'linear-gradient(135deg, #a78bfa 0%, #bae6fd 100%)',
              'linear-gradient(135deg, #bae6fd 0%, #a78bfa 100%)',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          style={{ filter: 'blur(16px)' }}
        />
        <motion.button
          ref={ref}
          className={`relative z-10 ${buttonClasses}`}
          disabled={disabled || isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...props}
        >
          {iconPosition === 'left' && renderIcon()}
          {children}
          {iconPosition === 'right' && !isLoading && icon && <span className="ml-2">{icon}</span>}
        </motion.button>
      </div>
    );
  }
);

Button.displayName = 'Button';

export default Button;

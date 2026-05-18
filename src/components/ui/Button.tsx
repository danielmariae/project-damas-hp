import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className = '', ...props }, ref) => {
    const baseStyles = 'relative font-semibold tracking-wider uppercase transition-all duration-300';

    const variants = {
      primary: 'bg-accent text-dark hover:bg-accent/90',
      secondary: 'bg-secondary text-dark hover:bg-secondary/90',
      outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-dark',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {variant === 'primary' && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-accent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        {variant === 'primary' && (
          <motion.div
            className="absolute inset-0 rounded-lg blur-md bg-gold-400"
            animate={{
              boxShadow: [
                '0 0 20px rgba(212, 175, 55, 0.4)',
                '0 0 40px rgba(212, 175, 55, 0.6)',
                '0 0 20px rgba(212, 175, 55, 0.4)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-8 py-3 rounded-none text-sm tracking-widest uppercase font-bold transition-all duration-300 ease-out border";
  
  const variants = {
    primary: "bg-brand-dark text-white border-brand-dark hover:bg-white hover:text-brand-dark",
    outline: "bg-transparent text-brand-dark border-brand-dark hover:bg-brand-dark hover:text-white",
    white: "bg-white text-brand-dark border-white hover:bg-brand-dark hover:text-white hover:border-brand-dark"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
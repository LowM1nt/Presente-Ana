import { type ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
}

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
    const baseStyles = "px-6 py-3 rounded-full font-heading font-bold text-lg shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer";

    const variants = {
        primary: "bg-kawaii-primary text-white border-2 border-kawaii-primary hover:bg-opacity-90",
        secondary: "bg-white text-kawaii-primary border-2 border-kawaii-primary hover:bg-gray-50",
        outline: "bg-transparent text-white border-2 border-white hover:bg-white/10"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
}

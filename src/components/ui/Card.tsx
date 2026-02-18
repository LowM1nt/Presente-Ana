import { type ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn("bg-white rounded-2xl shadow-xl p-6 border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300", className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}

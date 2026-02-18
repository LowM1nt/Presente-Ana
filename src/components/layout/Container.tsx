import { type ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div className={cn("mx-auto max-w-lg w-full px-4 relative z-10", className)}>
            {children}
        </div>
    );
}

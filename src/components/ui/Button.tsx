import { cn } from '@/utils/cn';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
}

export function Button({
                           variant = 'primary',
                           size = 'md',
                           children,
                           className,
                           ...props
                       }: ButtonProps) {
    const variants = {
        primary: 'bg-gradient-to-br from-primary to-primary-container text-white hover:opacity-90',
        secondary: 'bg-surface-container-highest text-primary hover:bg-surface-container-high',
        outline: 'border-2 border-primary text-primary hover:bg-primary/5'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <button
            className={cn(
                'rounded-xl font-bold transition-all',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
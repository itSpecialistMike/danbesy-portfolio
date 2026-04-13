import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    variant?: 'live' | 'tag' | 'counter';
    className?: string;
}

export function Badge({ children, variant = 'tag', className }: BadgeProps) {
    if (variant === 'live') {
        return (
            <div className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-primary text-xs font-bold uppercase tracking-widest",
                className
            )}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
                {children}
            </div>
        );
    }

    return (
        <span className={cn(
            "px-3 py-1 rounded-full bg-surface-container text-xs font-bold uppercase tracking-tight",
            className
        )}>
      {children}
    </span>
    );
}
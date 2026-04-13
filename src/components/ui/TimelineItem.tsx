import type { TimelineEvent } from '@/types';
import { cn } from '@/utils/cn';

interface TimelineItemProps {
    event: TimelineEvent;
}

export function TimelineItem({ event }: TimelineItemProps) {
    return (
        <div className="relative pl-8 border-l-2 border-primary/20">
            <div
                className={cn(
                    'absolute top-0 left-[-9px] w-4 h-4 rounded-full ring-4',
                    event.isCurrent
                        ? 'bg-primary ring-primary-fixed'
                        : 'bg-secondary-container ring-surface-container'
                )}
            />
            <div
                className={cn(
                    'text-sm font-bold mb-2',
                    event.isCurrent ? 'text-primary' : 'text-on-surface-variant'
                )}
            >
                {event.period}
            </div>
            <h4 className="text-2xl font-bold mb-2">{event.title}</h4>
            <p className="text-on-surface-variant">{event.description}</p>
        </div>
    );
}
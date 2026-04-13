import type { SocialLink } from '@/types';
import { MaterialIcon } from './MaterialIcon';
import { cn } from '@/utils/cn';

interface SocialButtonProps {
    link: SocialLink;
}

export function SocialButton({ link }: SocialButtonProps) {
    const variants = {
        default: 'bg-inverse-surface text-inverse-on-surface',
        telegram: 'bg-[#0088cc] text-white',
        primary: 'bg-primary text-white'
    };

    return (
        <a
            href={link.href}
            className={cn(
                'flex items-center gap-3 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform',
                variants[link.variant]
            )}
        >
            <MaterialIcon name={link.icon} />
            {link.label}
        </a>
    );
}
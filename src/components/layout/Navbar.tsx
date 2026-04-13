import { useState, useEffect, useRef } from 'react';
import type { NavItem } from '@/types';
import { cn } from '@/utils/cn';

interface NavbarProps {
    items: NavItem[];
}

export function Navbar({ items }: NavbarProps) {
    const [activeSection, setActiveSection] = useState(items[0]?.href || '');
    const ignoreScroll = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (ignoreScroll.current) return; // Игнорируем во время анимации

            const scrollPosition = window.scrollY + 100;

            for (let i = items.length - 1; i >= 0; i--) {
                const sectionId = items[i].href.replace('#', '');
                const element = document.getElementById(sectionId);

                if (!element) continue;

                if (scrollPosition >= element.offsetTop) {
                    setActiveSection(items[i].href);
                    return;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [items]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        const element = document.querySelector(href);
        if (!element) return;

        // Отключаем scroll-обработчик
        ignoreScroll.current = true;
        setActiveSection(href); // Сразу подсвечиваем

        const top = (element as HTMLElement).offsetTop - 80;
        window.scrollTo({ top, behavior: 'smooth' });

        // Включаем обратно после анимации (примерно 500ms)
        setTimeout(() => {
            ignoreScroll.current = false;
        }, 600);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-3xl shadow-[0_20px_40px_rgba(124,58,237,0.08)]">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
                <div className="text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">
                    PORTFOLIO FOR SRE
                </div>

                <div className="hidden md:flex items-center gap-8 font-semibold tracking-tight text-sm">
                    {items.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            className={cn(
                                'transition-colors pb-1 cursor-pointer border-b-2',
                                activeSection === item.href
                                    ? 'text-violet-700 border-violet-600'
                                    : 'text-slate-600 border-transparent hover:text-violet-500 hover:border-violet-300'
                            )}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold text-sm hover:opacity-80 transition-all duration-300 active:scale-95">
                    Resume
                </button>
            </div>
        </nav>
    );
}
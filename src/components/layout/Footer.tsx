interface FooterProps {
    socialLinks: { label: string; href: string }[];
}

export function Footer({ socialLinks }: FooterProps) {
    return (
        <footer className="w-full rounded-t-[3rem] bg-slate-50 dark:bg-slate-950 mt-24">
            <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto">
                <div className="mb-8 md:mb-0">
                    <div className="text-lg font-black text-slate-900 dark:text-white mb-2">
                        SRE NAME
                    </div>
                    <div className="text-sm tracking-wide uppercase font-medium text-slate-500">
                        <a  href={'https://t.me/mikesweety'}
                            className="text-slate-500 hover:text-violet-700 dark:hover:text-violet-300 transition-colors underline-offset-4 hover:underline"
                        >2026 frontend by @mikesweety</a>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-sm tracking-wide uppercase font-medium">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-slate-500 hover:text-violet-700 dark:hover:text-violet-300 transition-colors underline-offset-4 hover:underline"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
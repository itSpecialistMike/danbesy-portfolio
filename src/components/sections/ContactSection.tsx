import type { SocialLink } from '@/types';
import { SocialButton } from '@/components/ui/SocialButton';

interface ContactSectionProps {
    socialLinks: SocialLink[];
}

export function ContactSection({ socialLinks }: ContactSectionProps) {
    return (
        <section id="contact" className="py-24 px-6 min-h-[70vh]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">
                    Let&apos;s build something <span className="text-primary italic">resilient</span>.
                </h2>

                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {socialLinks.map((link) => (
                        <SocialButton key={link.id} link={link} />
                    ))}
                </div>

                <div className="p-8 rounded-xl bg-surface-container-low border-2 border-dashed border-outline-variant inline-block">
                    <p className="font-mono text-sm text-error font-bold italic uppercase tracking-wider">
                        &quot;Do not merge to master on Fridays without a backup.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
}
import type { TechCard as TechCardType } from '@/types';
import { TechCard } from '@/components/ui/TechCard';

interface TechStackSectionProps {
    cards: TechCardType[];
}

export function TechStackSection({ cards }: TechStackSectionProps) {
    return (
        <section id="tech-stack" className="py-24 px-6 bg-surface-container-low">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">
                            The Toolset.
                        </h2>
                        <p className="text-on-surface-variant max-w-md font-medium">
                            A curated selection of high-performance tools for building resilient infrastructure.
                        </p>
                    </div>
                    <div className="text-sm uppercase tracking-widest text-primary font-bold">
                        01 / Architecture
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {cards.map((card) => (
                        <TechCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
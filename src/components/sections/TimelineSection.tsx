import type { TimelineEvent } from '@/types';
import { TimelineItem } from '@/components/ui/TimelineItem';

interface TimelineSectionProps {
    events: TimelineEvent[];
}

export function TimelineSection({ events }: TimelineSectionProps) {
    return (
        <section id="timeline" className="py-24 px-6 bg-surface-container">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter mb-8">
                        The Journey.
                    </h2>
                    <div className="space-y-12">
                        {events.map((event) => (
                            <TimelineItem key={event.id} event={event} />
                        ))}
                    </div>
                </div>

                <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-center">
                    <h3 className="text-3xl font-black mb-6">About Me</h3>
                    <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                        <p>
                            I thrive at the intersection of development and operations. My philosophy is built on the pillars of <strong>observability, scalability, and repeatability</strong>.
                        </p>
                        <p>
                            Starting in Electronics gave me a unique perspective on how &quot;high-level&quot; software eventually meets the &quot;low-level&quot; electrons. Today, I use that understanding to squeeze every bit of performance out of Linux systems.
                        </p>
                        <p>
                            When not optimizing YAML or writing Bash scripts, I&apos;m likely researching the latest kernel patches or exploring the decentralized web.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
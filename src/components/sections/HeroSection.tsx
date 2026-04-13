import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center bg-surface relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-container/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-4xl">
                <Badge variant="live" className="mb-8">
                    Live Systems Monitoring
                </Badge>

                <h1 className="text-5xl md:text-8xl font-black text-on-surface tracking-tighter leading-[0.9] mb-6">
                    Automating <br />
                    <span className="bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent">
            Infrastructure
          </span>{' '}
                    at Scale.
                </h1>

                <p className="text-xl md:text-2xl text-on-surface-variant font-medium mb-12 max-w-2xl mx-auto">
                    DevOps Engineer | SRE | Linux Enthusiast
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Projects
                    </Button>
                    <Button variant="secondary" size="lg">
                        View GitHub
                    </Button>
                </div>

                {/* Easter Egg */}
                <div className="mt-16 group cursor-help">
                    <div className="inline-block p-4 rounded-lg bg-surface-container-low border border-outline-variant/10 group-hover:bg-primary-fixed transition-colors">
                        <code className="text-sm font-mono text-on-surface-variant group-hover:text-on-primary-fixed-variant">
                            /* Easter Egg: Maintains systems that run faster than their developer's code. */
                        </code>
                    </div>
                </div>
            </div>
        </section>
    );
}
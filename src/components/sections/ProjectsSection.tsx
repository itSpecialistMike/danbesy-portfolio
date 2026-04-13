import type { Project as ProjectType } from '@/types';
import { ProjectCard } from '@/components/ui/ProjectCard';

interface ProjectsSectionProps {
    projects: ProjectType[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <section id="projects" className="py-24 px-6 bg-surface">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter mb-4">
                            Case Studies.
                        </h2>
                        <p className="text-on-surface-variant max-w-md font-medium">
                            Real-world deployments and open-source contributions.
                        </p>
                    </div>
                    <div className="text-sm uppercase tracking-widest text-primary font-bold">
                        02 / Experience
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
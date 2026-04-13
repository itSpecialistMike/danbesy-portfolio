import type { Project } from '@/types';
import { MaterialIcon } from './MaterialIcon';
import { Badge } from './Badge';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8 bg-surface-container">
                <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-primary rounded-full font-bold shadow-xl">
                        View Details
                    </button>
                </div>
            </div>

            <h3 className="text-3xl font-black mb-3">{project.title}</h3>
            <p className="text-on-surface-variant mb-6 text-lg leading-relaxed">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                    <Badge key={tag} variant="tag">{tag}</Badge>
                ))}
            </div>

            <a
                href={project.githubUrl}
                className="flex items-center gap-2 text-primary font-bold hover:underline underline-offset-4"
            >
                View on GitHub <MaterialIcon name="arrow_outward" />
            </a>
        </div>
    );
}
import type { TechCard as TechCardType } from '@/types';
import { MaterialIcon } from './MaterialIcon';
import { cn } from '@/utils/cn';

interface TechCardProps {
    card: TechCardType;
}

export function TechCard({ card }: TechCardProps) {
    const { variant, icon, category, title, description, skills, gridItems } = card;

    const gridClasses = {
        default: 'md:col-span-2',
        skills: 'md:col-span-1',
        grid: 'md:col-span-2',
        highlight: 'md:col-span-1'
    };

    if (variant === 'highlight') {
        return (
            <div className="md:col-span-1 p-8 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white flex flex-col justify-center items-center text-center gap-4">
                <MaterialIcon name={icon} className="text-5xl" />
                <div>
                    <h3 className="text-2xl font-black">{title}</h3>
                    <p className="text-sm opacity-80 uppercase tracking-tighter font-bold">{description}</p>
                </div>
            </div>
        );
    }

    return (
        <div
            className={cn(
                'p-8 rounded-xl bg-surface-container-lowest flex flex-col justify-between min-h-[300px] group hover:bg-primary-fixed transition-all duration-500',
                gridClasses[variant]
            )}
        >
            {variant === 'skills' ? (
                <>
                    <div className="flex flex-col gap-4">
                        <MaterialIcon name={icon} className="text-3xl text-primary" />
                        <h3 className="text-2xl font-black">{title}</h3>
                    </div>
                    <div className="space-y-1 font-mono text-sm mt-4">
                        {skills?.map((skill) => (
                            <div key={skill.name} className="flex justify-between">
                                <span>{skill.name}</span>
                                <span className="text-primary">{skill.percentage}%</span>
                            </div>
                        ))}
                    </div>
                </>
            ) : variant === 'grid' ? (
                <>
                    <div className="grid grid-cols-2 gap-4">
                        {gridItems?.map((item) => (
                            <div key={item.label} className="p-4 rounded-lg bg-surface-container border border-outline-variant/10">
                                <MaterialIcon name={item.icon} className="mb-2" />
                                <div className="font-bold">{item.label}</div>
                            </div>
                        ))}
                    </div>
                    <h3 className="text-2xl font-black mt-6">{title}</h3>
                </>
            ) : (
                <>
                    <div className="flex justify-between items-start">
                        <MaterialIcon name={icon} className="text-4xl text-primary" />
                        <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                            {category}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-black mb-2">{title}</h3>
                        <p className="text-on-surface-variant group-hover:text-on-primary-fixed-variant">
                            {description}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}
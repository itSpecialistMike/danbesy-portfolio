export interface NavItem {
    label: string;
    href: string;
    isActive?: boolean;
}

export interface TechSkill {
    name: string;
    percentage: number;
}

export interface TechCard {
    id: string;
    icon: string;
    category: string;
    title: string;
    description: string;
    variant: 'default' | 'skills' | 'grid' | 'highlight';
    skills?: TechSkill[];
    gridItems?: { icon: string; label: string }[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    tags: string[];
    githubUrl: string;
}

export interface TimelineEvent {
    id: string;
    period: string;
    title: string;
    description: string;
    isCurrent?: boolean;
}

export interface SocialLink {
    id: string;
    label: string;
    href: string;
    icon: string;
    variant: 'default' | 'telegram' | 'primary';
}
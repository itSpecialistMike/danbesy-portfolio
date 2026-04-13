import type { NavItem, TechCard, Project, TimelineEvent, SocialLink } from '@/types';

export const navItems: NavItem[] = [
    { label: 'Tech Stack', href: '#tech-stack', isActive: true },
    { label: 'Projects', href: '#projects' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' }
];

export const techCards: TechCard[] = [
    {
        id: 'linux',
        icon: 'terminal',
        category: 'Kernel Space',
        title: 'Linux Mastery',
        description: 'Expertise in Arch Linux & CachyOS. Optimized kernels and low-latency system tuning.',
        variant: 'default'
    },
    {
        id: 'k8s',
        icon: 'hub',
        category: 'Orchestration',
        title: 'Kubernetes',
        description: 'k8s, Helm. Container lifecycle management at the edge and in the cloud.',
        variant: 'default'
    },
    {
        id: 'automation',
        icon: 'auto_fix',
        category: '',
        title: 'Automation',
        description: '',
        variant: 'skills',
        skills: [
            { name: 'Go', percentage: 85 },
            { name: 'Python', percentage: 90 },
            { name: 'Bash', percentage: 99 }
        ]
    },
    {
        id: 'cicd',
        icon: 'deployed_code',
        category: '',
        title: 'CI/CD & Proxy',
        description: '',
        variant: 'grid',
        gridItems: [
            { icon: 'deployed_code', label: 'Docker' },
            { icon: 'settings_ethernet', label: 'Nginx' },
            { icon: 'bolt', label: 'Actions' },
            { icon: 'cloud', label: 'Cloud' }
        ]
    },
    {
        id: 'coffee',
        icon: 'coffee',
        category: '',
        title: 'Black Coffee',
        description: 'Primary System Fuel',
        variant: 'highlight'
    }
];

export const projects: Project[] = [
    {
        id: 'self-hosted',
        title: 'Self-Hosted Infrastructure',
        description: 'A fully decentralized communication stack leveraging Matrix and Dendrite, hosted on a custom k3s cluster with automated backups and failover.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
        imageAlt: 'Modern high-tech data center with glowing blue and violet lights',
        tags: ['Docker', 'Matrix', 'K8s'],
        githubUrl: '#'
    },
    {
        id: 'github-projects',
        title: 'Public GitHub Projects',
        description: 'Open-source Go CLI tools for system monitoring and automated Nginx configuration management for dynamic microservices.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
        imageAlt: 'Code on screen with purple syntax highlighting',
        tags: ['Go', 'CLI', 'OSS'],
        githubUrl: '#'
    }
];

export const timelineEvents: TimelineEvent[] = [
    {
        id: 'sre',
        period: '2022 — PRESENT',
        title: 'Site Reliability Engineer',
        description: 'Focusing on high-availability clusters, automation of routine tasks, and implementing robust monitoring solutions.',
        isCurrent: true
    },
    {
        id: 'systems',
        period: '2019 — 2022',
        title: 'Systems Engineer',
        description: 'Managed large-scale Linux deployments and optimized CI/CD pipelines for fintech applications.'
    },
    {
        id: 'education',
        period: '2015 — 2019',
        title: 'IT & Electronics Education',
        description: 'Foundation in low-level hardware, networking protocols, and structural computing logic.'
    }
];

export const socialLinks: SocialLink[] = [
    { id: 'github', label: 'GitHub', href: '#', icon: 'code', variant: 'default' },
    { id: 'telegram', label: 'Telegram', href: '#', icon: 'send', variant: 'telegram' },
    { id: 'cv', label: 'Download CV', href: '#', icon: 'download', variant: 'primary' }
];

export const footerLinks = [
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Email', href: '#' }
];
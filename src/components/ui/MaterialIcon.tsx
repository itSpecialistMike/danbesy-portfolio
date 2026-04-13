interface MaterialIconProps {
    name: string;
    className?: string;
}

export function MaterialIcon({ name, className = '' }: MaterialIconProps) {
    return (
        <span className={`material-symbols-outlined ${className}`} data-icon={name}>
      {name}
    </span>
    );
}
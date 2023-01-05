export interface ButtonProps {
    children: string;
    variant?: "filled" | "outline" | "ghost";
    colorScheme?: "blue";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    onClick?: () => void;
    icon?: SVG;
    block?: boolean;
}
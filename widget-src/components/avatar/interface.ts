export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | number;

export interface AvatarProps extends AutoLayoutProps {
    displayName?: string;
    src?: string;
    size?: AvatarSize;
    fill?: AutoLayoutProps['fill'];
}

export interface AvatarGroupProps extends AutoLayoutProps {
    size?: AvatarSize;
    max?: number;
    children?: FigmaDeclarativeNode;
    stacked?: boolean;
}
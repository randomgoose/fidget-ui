export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | number;

export interface AvatarProps extends Omit<ImageProps, "src" | "width" | "height"> {
    name?: string;
    src?: string;
    size?: AvatarSize;
    fill?: AutoLayoutProps['fill'];
}
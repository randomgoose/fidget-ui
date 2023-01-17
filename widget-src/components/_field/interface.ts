export interface FieldProps extends AutoLayoutProps {
    variant?: "filled" | "outline" | "flush";
    size?: "xs" | "sm" | "md" | "lg";
    placeholder?: string;
    disabled?: boolean;
}
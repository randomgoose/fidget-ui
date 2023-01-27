export interface FieldProps extends InputProps {
    variant?: "filled" | "outline" | "flush";
    size?: "xs" | "sm" | "md" | "lg";
    placeholder?: string;
    leftElement?: FigmaDeclarativeNode;
    rightElement?: FigmaDeclarativeNode;
    leftAddon?: FigmaDeclarativeNode;
    rightAddon?: FigmaDeclarativeNode;
    disabled?: boolean;
}
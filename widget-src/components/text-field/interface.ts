export interface TextFieldProps extends InputProps {
    id: string;
    variant?: "filled" | "outline" | "flush";
    onClear?: () => void;
    size?: "sm" | "md" | "lg";
    placeholder?: string;
    leftElement?: FigmaDeclarativeNode;
    disabled?: boolean;
}
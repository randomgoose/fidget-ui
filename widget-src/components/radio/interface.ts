export type Option = {
    value: string;
    label?: FigmaDeclarativeNode;
    disabled?: boolean;
}

export interface RadioProps {
    value: string;
    children?: FigmaDeclarativeNode;
    disabled?: boolean;
    checked: boolean;
    onClick?: (value: string) => void;
}

export interface RadioGroupProps {
    name: string;
    options?: Option[];
    children?: FigmaDeclarativeNode;
    orientation?: "vertical" | "horizontal"
    spacing?: number;
    onChange?: (option: Option) => void;
}
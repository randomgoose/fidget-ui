export interface CheckboxProps extends AutoLayoutProps {
    checked?: boolean;
    children?: FigmaDeclarativeNode;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
}

export interface CheckboxGroupProps {
    data?: string[] | { label: string; value: string }[];
    name: string;
    children: FigmaDeclarativeChildren<CheckboxProps>;
}
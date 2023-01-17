import { FieldProps } from "../_field/interface";

export type Option = {
    value: string;
    label: string;
}

export interface SelectProps extends FieldProps {
    id: string;
    options: Option[];
    onChange?: (value: string) => void;
}
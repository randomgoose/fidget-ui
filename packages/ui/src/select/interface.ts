import { FieldProps } from '../_field/interface';

export type OptionProps = {
  value: string;
  label?: string;
};

export interface SelectProps extends Omit<FieldProps, 'value' | 'onTextEditEnd'> {
  id: string;
  options: OptionProps[];
  onChange?: (selected: OptionProps) => void;
  placement?: 'bottom' | 'top';
}

import { FieldProps } from '../_field/interface';

export interface TextFieldProps extends FieldProps {
  id?: string;
  variant?: 'filled' | 'outline' | 'flush';
  onClear?: () => void;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  elementLeft?: FigmaDeclarativeNode;
  elementRight?: FigmaDeclarativeNode;
  addonLeft?: FigmaDeclarativeNode;
  addonRight?: FigmaDeclarativeNode;
  disabled?: boolean;
  showClearIcon?: boolean;
}

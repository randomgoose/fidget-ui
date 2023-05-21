import { FieldProps } from '../_field/interface';

export interface TextFieldProps extends FieldProps {
  id?: string;
  variant?: 'filled' | 'outline' | 'flush';
  onClear?: () => void;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  leftElement?: FigmaDeclarativeNode;
  rightElement?: FigmaDeclarativeNode;
  leftAddon?: FigmaDeclarativeNode;
  rightAddon?: FigmaDeclarativeNode;
  disabled?: boolean;
  showClearIcon?: boolean;
}

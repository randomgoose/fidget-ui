export interface FieldProps extends InputProps {
  variant?: 'filled' | 'outline' | 'flush';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  placeholder?: string;
  elementLeft?: FigmaDeclarativeNode;
  elementRight?: FigmaDeclarativeNode;
  addonLeft?: FigmaDeclarativeNode;
  addonRight?: FigmaDeclarativeNode;
  disabled?: boolean;
}

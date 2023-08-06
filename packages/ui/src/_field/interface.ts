import { ComponentStyle } from '../types';

type FieldVariant = 'filled' | 'outline' | 'flush';
type FieldSize = 'xs' | 'sm' | 'md' | 'lg';

export interface FieldAnatomy {
  field: AutoLayoutProps;
  input: AutoLayoutProps;
  text: TextProps;
  clearIcon: Omit<SVGProps, 'src' | 'fill'> & { color: string };
  leftAddon: AutoLayoutProps;
  rightAddon: AutoLayoutProps;
  element: AutoLayoutProps;
}

export interface FieldProps extends InputProps {
  style?: ComponentStyle<FieldAnatomy, FieldSize, FieldVariant>;
  variant?: FieldVariant;
  size?: FieldSize;
  placeholder?: string;
  elementLeft?: FigmaDeclarativeNode;
  elementRight?: FigmaDeclarativeNode;
  addonLeft?: FigmaDeclarativeNode;
  addonRight?: FigmaDeclarativeNode;
  disabled?: boolean;
}

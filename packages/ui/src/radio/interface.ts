import { ComponentStyle } from '../types';

export type Option = {
  value: string;
  label?: FigmaDeclarativeNode;
  disabled?: boolean;
};

export interface RadioAnatomy {
  control: AutoLayoutProps;
  label: TextProps;
  container: AutoLayoutProps;
  ink: Partial<RectangleProps>;
}

export interface RadioProps {
  style?: ComponentStyle<RadioAnatomy>;
  value: string;
  children?: FigmaDeclarativeNode;
  disabled?: boolean;
  checked?: boolean;
  onClick?: (value: string) => void;
}

export interface RadioGroupProps {
  name: string;
  value?: string;
  options?: Option[];
  children?: FigmaDeclarativeNode;
  orientation?: 'vertical' | 'horizontal';
  spacing?: number;
  onChange?: (option: Option) => void;
  render?: ({ checked, option }: { checked: boolean; option: Option }) => FigmaDeclarativeNode;
}

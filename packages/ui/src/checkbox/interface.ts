import { ColorScheme } from '../types';

export type Option = {
  value: string;
  label?: FigmaDeclarativeNode;
  disabled?: boolean;
};

export interface CheckboxProps extends AutoLayoutProps {
  colorScheme?: ColorScheme;
  checked?: boolean;
  children?: FigmaDeclarativeNode;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface CheckboxGroupProps {
  name: string;
  options?: Option[];
  orientation?: 'vertical' | 'horizontal';
  spacing?: number;
  onChange?: (option: Option) => void;
  children?: FigmaDeclarativeChildren<CheckboxProps>;
  render?: ({ checked, option }: { checked: boolean; option: Option }) => FigmaDeclarativeNode;
}

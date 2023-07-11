import { ColorScheme } from '../types';

export type Option = {
  value: string;
  label?: FigmaDeclarativeNode;
  disabled?: boolean;
};

export interface CheckboxProps extends AutoLayoutProps {
  id: string;
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
  // TODO expose checkbox values
  onChange?: (option: Option) => void;
  children?: FigmaDeclarativeChildren<CheckboxProps>;
  render?: ({ checked, option }: { checked: boolean; option: Option }) => FigmaDeclarativeNode;
}

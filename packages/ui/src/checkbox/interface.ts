import { ColorScheme, ComponentStyle } from '../types';

export type Option = {
  value: string;
  label?: FigmaDeclarativeNode;
  disabled?: boolean;
};

export interface CheckboxAnatomy {
  control: AutoLayoutProps;
  container: AutoLayoutProps;
  label: TextProps;
  ink: Omit<SVGProps, 'src'> & { color: SVGProps['fill'] };
}

export interface CheckboxProps extends AutoLayoutProps {
  id: string;
  style?: ComponentStyle<CheckboxAnatomy>;
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

import { ColorScheme, ComponentStyle } from '../types';

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchAnatomy {
  container: AutoLayoutProps;
  thumb: RectangleProps;
}

export interface SwitchProps extends AutoLayoutProps {
  id: string;
  style?: ComponentStyle<SwitchAnatomy, SwitchSize>;
  defaultChecked?: boolean;
  checked?: boolean;
  size?: SwitchSize;
  colorScheme?: ColorScheme;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

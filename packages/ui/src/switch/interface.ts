import { ColorScheme, ComponentStyle } from '../types';

export type SwitchSize = 'sm' | 'md' | 'lg';
export interface SwitchStyle {
  container: AutoLayoutProps;
  thumb: RectangleProps;
}

export interface SwitchProps extends AutoLayoutProps {
  id: string;
  style?: ComponentStyle<string, string, SwitchStyle>;
  defaultChecked?: boolean;
  checked?: boolean;
  size?: SwitchSize;
  colorScheme?: ColorScheme;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

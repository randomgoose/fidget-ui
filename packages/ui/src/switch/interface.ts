import { ColorScheme } from '../types';

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps extends AutoLayoutProps {
  id?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  size?: SwitchSize;
  colorScheme?: ColorScheme;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

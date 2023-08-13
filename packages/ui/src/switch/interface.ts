import { ColorScheme, ComponentStyle } from '../types';

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchAnatomy {
  container: AutoLayoutProps;
  thumb: RectangleProps;
}

/**
 * @title Switch
 */
export interface SwitchProps extends AutoLayoutProps {
  /**
   * @en A unique identifier of the switch.
   */
  id: string;
  /**
   * @en The style object for all switch parts.
   */
  style?: ComponentStyle<SwitchAnatomy, SwitchSize>;
  /**
   * @en If 'true', the switch is by default checked.
   */
  defaultChecked?: boolean;
  /**
   * @en If 'true', the switch is checked.
   */
  checked?: boolean;
  /**
   * @en The size of the switch (T-shirt size).
   * @defaultValue 'md'
   */
  size?: SwitchSize;
  /**
   * @en Apply a preset color scheme to the switch.
   */
  colorScheme?: ColorScheme;
  /**
   * @param value
   * 
   * @en The change event handler of the switch.
   */
  onChange?: (value: boolean) => void;
  /**
   * @en If 'true', the switch is disabled.
   */
  disabled?: boolean;
}

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

/**
 * @title Radio
 */
export interface RadioProps {
  /**
   * @en The style object including all radio elements.
   */
  style?: ComponentStyle<RadioAnatomy>;
  /**
   * @en The value of the radio.
   */
  value: string;
  /**
   * @en The label of the radio.
   */
  children?: FigmaDeclarativeNode;
  /**
   * @en If 'true', the radio is disabled.
   */
  disabled?: boolean;
  /**
   * @en If 'true', the radio is checked.
   */
  checked?: boolean;
  /**
   *
   * @param value
   * @returns
   * @en The click event.
   */
  onClick?: (value: string) => void;
}

/**
 * @title Radio Group
 */
export interface RadioGroupProps {
  /**
   * @en The name of the radio group. It is used as the key of the component state.
   */
  name: string;
  /**
   * @en The selected value of the radio group.
   */
  value?: string;
  /**
   * @en The data objects of the radios wrapped.
   */
  options?: Option[];
  /**
   * @en The children elements wrapped in the radio group.
   */
  children?: FigmaDeclarativeNode;
  /**
   * @en The orientation of the radio group.
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * @en The spacing between the radios wrapped.
   */
  spacing?: number;
  /**
   *
   * @param option
   * @returns
   * @en The change event.
   */
  onChange?: (option: Option) => void;
  /**
   *
   * @param option
   * @returns
   * @en The render function takes the data and returns a custom component instead of the default checkbox.
   */
  render?: ({ checked, option }: { checked: boolean; option: Option }) => FigmaDeclarativeNode;
}

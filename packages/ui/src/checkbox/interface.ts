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

/**
 * @title Checkbox
 */
export interface CheckboxProps extends AutoLayoutProps {
  /**
   * @en A unique identifier for the checkbox.
   */
  id: string;
  /**
   * @en The style object for all checkbox parts.
   */
  style?: ComponentStyle<CheckboxAnatomy>;
  /**
   * @en Apply a preset color scheme to the checkbox.
   */
  colorScheme?: ColorScheme;
  /**
   * @en If 'true', the checkbox is checked.
   */
  checked?: boolean;
  /**
   * @en The label of the checkbox.
   */
  children?: FigmaDeclarativeNode;
  /**
   * @en If 'true', the checkbox is disabled.
   */
  disabled?: boolean;
  /**
   * @en The change event of the checkbox.
   */
  onChange?: (checked: boolean) => void;
}

/**
 * @title Checkbox Group
 */
export interface CheckboxGroupProps {
  /**
   * @en The category of checkboxes wrapped. It is used as a key for the component state.
   */
  name: string;
  /**
   * @en The data objects of checkboxes wrapped.
   */
  options?: Option[];
  /**
   * @en The direction of checkboxes wrapped.
   * @defaultValue 'horizontal'
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * @en The spacing between checkboxes wrapped.
   */
  spacing?: number;
  /**
   *
   * @param option
   * @en The change event.
   */
  onChange?: (option: Option) => void;
  /**
   * @en The other custom elements wrapped in the group.
   */
  children?: FigmaDeclarativeChildren<CheckboxProps>;
  /**
   * @en The render function takes the data and returns a custom component instead of the default checkbox.
   */
  render?: ({ checked, option }: { checked: boolean; option: Option }) => FigmaDeclarativeNode;
}

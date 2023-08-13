import { FieldProps } from '../_field/interface';

export type OptionProps = {
  value: string;
  label?: string;
};

/**
 * @title Select
 */
export interface SelectProps extends Omit<FieldProps, 'value' | 'onTextEditEnd'> {
  /**
   * @en A unique identifier for the select.
   */
  id: string;
  /**
   * @en The options of the select.
   */
  options: OptionProps[];
  /**
   * @param selected
   * @en The change event handler of the select.
   */
  onChange?: (selected: OptionProps) => void;
  /**
   * @en The placement of the popper layer.
   * @defaultValue 'bottom'
   */
  placement?: 'bottom' | 'top';
}

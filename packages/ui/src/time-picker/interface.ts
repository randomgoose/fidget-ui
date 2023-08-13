import { Dayjs } from 'dayjs';
import { FieldProps } from '../_field/interface';

/**
 * @title Time Picker
 */
export interface TimePickerProps extends Omit<FieldProps, 'value' | 'onTextEditEnd'> {
  /**
   * @en A unique identifier for the time picker.
   */
  id: string;
  /**
   * @en The value of the time picker.
   */
  value?: Dayjs | string | Date;
  /**
   *
   * @param newValue
   * @returns
   *
   * @en The change event handler.
   */
  onChange?: (newValue: string) => void;
  /**
   * @en The placement of the popper layer.
   */
  placement?: 'top' | 'bottom';
}

import { Dayjs } from 'dayjs';
import { FieldProps } from '../_field/interface';
import { ComponentStyle } from '../types';

export type DateType = Date | Dayjs | string;
export type CalendarView = 'date' | 'month' | 'year';

export interface DatePickerAnatomy {
  container: AutoLayoutProps;
  calendar: AutoLayoutProps;
  row: AutoLayoutProps;
  controls: AutoLayoutProps;
  weekday: AutoLayoutProps;
  cell: AutoLayoutProps;
  digit: TextProps;
  indicator: EllipseProps;
}

/**
 * @title DatePicker
 */
export interface DatePickerProps extends Omit<FieldProps, 'onTextEditEnd' | 'value' | 'style'> {
  /**
   * @en A unique identifier for the date picker.
   */
  id: string;
  /**
   * @en The style object inlcuding all date picker parts.
   */
  style?: ComponentStyle<DatePickerAnatomy>;
  /**
   * @en The selected date.
   */
  date?: DateType;
  /**
   * 
   * @param date
   * 
   * @en The change event of the date.
   */
  onChange?: (date: Date) => void;
  /**
   * @en The placement of the popper layer.
   */
  placement?: 'bottom' | 'top' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
  /**
   * @en The date format.
   */
  format?: string;
}

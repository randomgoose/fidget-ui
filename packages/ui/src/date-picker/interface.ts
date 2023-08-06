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

export interface DatePickerProps extends Omit<FieldProps, 'onTextEditEnd' | 'value' | 'style'> {
  id: string;
  style?: ComponentStyle<DatePickerAnatomy>;
  date?: DateType;
  onChange?: (date: Date) => void;
  excludeDates?: Date[];
  placement?: 'bottom' | 'top' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
  format?: string;
}

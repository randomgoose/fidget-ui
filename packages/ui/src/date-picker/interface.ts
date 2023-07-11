import { Dayjs } from 'dayjs';
import { FieldProps } from '../_field/interface';

export type DateType = Date | Dayjs | string;
export type CalendarView = 'date' | 'month' | 'year';

export interface DatePickerProps extends Omit<FieldProps, 'onTextEditEnd' | 'value'> {
  id: string;
  date?: DateType;
  onChange?: (date: Date) => void;
  excludeDates?: Date[];
  placement?: 'bottom' | 'top' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
  format?: string;
}

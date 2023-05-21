import { Dayjs } from 'dayjs';
import { FieldProps } from '../_field/interface';

export interface TimePickerProps extends Omit<FieldProps, 'value' | 'onTextEditEnd'> {
  id: string;
  value?: Dayjs | string | Date;
  onChange?: (newValue: string) => void;
  placement?: 'top' | 'bottom';
}

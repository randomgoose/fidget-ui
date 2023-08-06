import { IconButtonProps } from '../button/interface';
import { ComponentStyle } from '../types';

export interface StepperAnatomy {
  field: Omit<InputProps, 'value' | 'onTextEditEnd'>;
  incrementButton: IconButtonProps;
  decrementButton: IconButtonProps;
}

export type StepperSize = 'sm' | 'md' | 'lg';

export interface StepperProps extends AutoLayoutProps {
  style: ComponentStyle<StepperAnatomy, StepperSize>;
  id: string;
  value?: number;
  defaultValue?: number;
  size?: StepperSize;
  step?: number;
  max?: number;
  min?: number;
  disabled?: boolean;
  onChange?: (nextValue: number) => void;
  onIncrement?: (nextValue: number) => void;
  onDecrement?: (nextValue: number) => void;
  precision?: number;
}

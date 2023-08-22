import { IconButtonProps } from '../button/interface';
import { ComponentStyle } from '../types';

export interface StepperAnatomy {
  field: Omit<InputProps, 'value' | 'onTextEditEnd'>;
  incrementButton: IconButtonProps;
  decrementButton: IconButtonProps;
}

export type StepperSize = 'sm' | 'md' | 'lg';

/**
 * @title Stepper
 */
export interface StepperProps extends AutoLayoutProps {
  /**
   * @en A unique identifier for the stepper.
   */
  id: string;
  /**
   * @en The style object including all stepper parts.
   */
  style?: ComponentStyle<StepperAnatomy, StepperSize, string>;
  /**
   * @en The controlled value of the stepper.
   */
  value?: number;
  /**
   * @en The default value of the stepper (uncontrolled).
   */
  defaultValue?: number;
  /**
   * @en The size of the stepper (T-shirt size).
   */
  size?: StepperSize;
  /**
   * @en The step each time the stepper increments / decrements.
   */
  step?: number;
  /**
   * @en The upper limit of the range.
   */
  max?: number;
  /**
   * @en The lower limit of the range.
   */
  min?: number;
  /**
   * @en If 'true', the stepper is disabled.
   */
  disabled?: boolean;
  /**
   *
   * @param nextValue
   * @returns
   *
   * @en The change event handler.
   */
  onChange?: (nextValue: number) => void;
  /**
   *
   * @param nextValue
   * @returns
   *
   * @en The increment event handler.
   */
  onIncrement?: (nextValue: number) => void;
  /**
   *
   * @param nextValue
   * @returns
   *
   * @en The decrement event handler.
   */
  onDecrement?: (nextValue: number) => void;
  /**
   * @en The number of decimal points used to round the value.
   */
  precision?: number;
}

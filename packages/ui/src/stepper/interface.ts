export interface StepperProps extends AutoLayoutProps {
  id: string;
  value?: number;
  defaultValue?: number;
  size?: 'sm' | 'md' | 'lg';
  step?: number;
  max?: number;
  min?: number;
  disabled?: boolean;
  onChange?: (nextValue: number) => void;
  onIncrement?: (nextValue: number) => void;
  onDecrement?: (nextValue: number) => void;
  precision?: number;
}

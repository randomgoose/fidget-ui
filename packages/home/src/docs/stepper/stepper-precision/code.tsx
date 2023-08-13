import { Stepper } from 'fidget-ui';

const { useSyncedState } = figma.widget;

export function StepperPrecision() {
  const [value, setValue] = useSyncedState('m12i', 0);

  return (
    <Stepper
      id="p04g"
      step={0.01}
      precision={2}
      value={value}
      onChange={(nextValue) => setValue(nextValue)}
    />
  );
}

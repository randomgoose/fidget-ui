import { Stepper } from 'fidget-ui';

const { useSyncedState } = figma.widget;

export function ControlledSteppers() {
  const [value, setValue] = useSyncedState('stepper/controlled-value', 0);

  return <Stepper id="p04g" value={value} onChange={(nextValue) => setValue(nextValue)} />;
}

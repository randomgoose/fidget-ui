import { Stepper } from 'fidget-ui';

const { Text } = figma.widget;

export function StepperMinAndMax() {
  return (
    <>
      <Text>The value range is from 0 to 8.</Text>
      <Stepper id="2hu9" defaultValue={1} min={0} max={8} />
    </>
  );
}

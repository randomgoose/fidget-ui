import { Stepper } from 'fidget-ui';

const { Text } = figma.widget;

export function StepperStep() {
  return (
    <>
      <Text>The value increments/decrements by 0.1.</Text>
      <Stepper id="fu4j" step={0.1} />
    </>
  );
}

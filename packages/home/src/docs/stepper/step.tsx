import { Heading, Stepper, Tabs } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

const { Text } = figma.widget;

export default function StepperStep() {
  return (
    <>
      <Heading as="h5">Step</Heading>

      <Tabs
        id="stepper/step"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} spacing={24} direction="vertical">
                <Text>The value increments/decrements by 0.1.</Text>
                <Stepper id="fu4j" step={0.1} />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: <Code height={240}>{`<Stepper id='fu4j' step={0.1} />`}</Code>,
          },
        ]}
      />
    </>
  );
}

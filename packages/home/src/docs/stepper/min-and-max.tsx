import { Heading, Stepper, Tabs } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code, P, Pre } from '../typography';

const { Text } = figma.widget;

export default function StepperMinAndMax() {
  return (
    <>
      <Heading as="h5">Min and max value</Heading>
      <P>
        Set the value range with <Pre>min</Pre> and <Pre>max</Pre> prop. Any invalid input will be
        reset to the current value.
      </P>
      <Tabs
        id="stepper/min-and-max"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} direction="vertical" spacing={24}>
                <Text>The value range is from 0 to 8.</Text>
                <Stepper id="2hu9" defaultValue={1} min={0} max={8} />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>{`<Stepper id='2hu9' defaultValue={1} min={0} max={8} />`}</Code>
            ),
          },
        ]}
      />
    </>
  );
}

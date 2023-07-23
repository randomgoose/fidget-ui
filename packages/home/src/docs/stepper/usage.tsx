import { Heading, Stepper, Tabs } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code, P } from '../typography';

export default function StepperUsage() {
  return (
    <>
      <Heading as="h5">Usage</Heading>
      <P>Type in or adjust the value using the increment/decrement buttons.</P>
      <Tabs
        id="stepper/usage"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <Stepper id="nr83" />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: <Code height={240}>{`<Stepper id='nr83'/>`}</Code>,
          },
        ]}
      />
    </>
  );
}

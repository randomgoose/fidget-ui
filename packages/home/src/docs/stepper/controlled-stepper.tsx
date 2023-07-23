import { Heading, Stepper, Tabs } from 'fidget-ui';
import { Code, P } from '../typography';
import { Case } from '../../components/case';

const { useSyncedState } = figma.widget;

export default function ControlledSteppers() {
  const [value, setValue] = useSyncedState('stepper/controlled-value', 0);

  return (
    <>
      <Heading as="h5">Controlled Steppers</Heading>
      <P>Steppers can either be controlled or uncontrolled.</P>

      <Tabs
        id="steppers/controlled-steppers"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <Stepper id="p04g" value={value} onChange={(nextValue) => setValue(nextValue)} />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: <Code>{`const [value, setValue] = useSyncedState('u7x2', 0);`}</Code>,
          },
        ]}
      />
    </>
  );
}

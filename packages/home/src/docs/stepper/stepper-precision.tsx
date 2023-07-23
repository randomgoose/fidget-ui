import { Heading, Stepper, Tabs } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

const { useSyncedState } = figma.widget;

export default function StepperPrecision() {
  const [value, setValue] = useSyncedState('m12i', 0);

  return (
    <>
      <Heading as="h5">Precision</Heading>

      <Tabs
        id="steppers/precision"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <Stepper
                  id="p04g"
                  value={value}
                  onChange={(nextValue) => setValue(nextValue)}
                  precision={2}
                  step={0.01}
                />
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

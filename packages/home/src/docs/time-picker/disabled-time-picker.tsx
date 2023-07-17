import { Heading, Switch, Tabs, TimePicker } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

const { useSyncedState, AutoLayout, Text } = figma.widget;

export default function DisabledTimePicker() {
  const [disabled, setDisabled] = useSyncedState('time-picker/disabled', true);

  return (
    <>
      <Heading as="h5">Disabled TimePicker</Heading>

      <Tabs
        id="time-picker/disabled-time-picker"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={480} direction="vertical" spacing={24}>
                <AutoLayout spacing={8}>
                  <Text>Disable this TimePicker?</Text>
                  <Switch id="k025" checked={disabled} onChange={(v) => setDisabled(v)} />
                </AutoLayout>
                <TimePicker id="tkw8" disabled={disabled} />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={480}>
                {`const [disabled, setDisabled] = useSyncedState('disabled', true);
() => <TimePicker id="tkw8" disabled={disabled} />`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}

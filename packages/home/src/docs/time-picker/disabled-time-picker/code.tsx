import { Switch, TimePicker } from 'fidget-ui';

const { useSyncedState, AutoLayout, Text } = figma.widget;

export function DisabledTimePicker() {
  const [disabled, setDisabled] = useSyncedState('time-picker/disabled', true);

  return (
    <>
      <AutoLayout spacing={8}>
        <Text>Disable this TimePicker?</Text>
        <Switch id="k025" checked={disabled} onChange={(v) => setDisabled(v)} />
      </AutoLayout>
      <TimePicker id="tkw8" disabled={disabled} />
    </>
  );
}

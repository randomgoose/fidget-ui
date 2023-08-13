import { Checkbox } from 'fidget-ui';

const { useSyncedState, Text } = figma.widget;

export function SingleCheckbox() {
  const [checked, setChecked] = useSyncedState<boolean>('up04', false);

  return (
    <Checkbox id="" checked={checked} onChange={(value) => setChecked(value)}>
      <Text>Happy? {checked ? 'Yes!' : 'No.'}</Text>
    </Checkbox>
  );
}

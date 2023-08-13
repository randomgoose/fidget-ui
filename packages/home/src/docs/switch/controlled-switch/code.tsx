import { Button, Switch } from 'fidget-ui';

const { AutoLayout, useSyncedState } = figma.widget;

export function ControlledSwitch() {
  const [checked, setChecked] = useSyncedState('switch/checked', false);

  return (
    <>
      <AutoLayout spacing={8} verticalAlignItems={'center'}>
        <Button size="sm" variant="outline" onClick={() => setChecked((prev) => !prev)}>
          Toggle
        </Button>
        <Switch id="hk91" checked={checked} />
      </AutoLayout>
    </>
  );
}

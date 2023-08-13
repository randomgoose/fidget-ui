import { Switch } from 'fidget-ui';

export function DisabledSwitch() {
  return (
    <>
      <Switch id="p2j5" disabled checked />
      <Switch id="j6k3" disabled checked={false} />
    </>
  );
}

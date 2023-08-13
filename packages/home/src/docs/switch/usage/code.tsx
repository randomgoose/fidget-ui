import { Switch } from 'fidget-ui';

export function SwitchUsage() {
  return (
    <Switch
      id="ht5o"
      onChange={(checked) => {
        figma.notify(checked + '');
      }}
    />
  );
}

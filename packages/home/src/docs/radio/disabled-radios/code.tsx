import { RadioGroup } from 'fidget-ui';

export function DisabledRadios() {
  return (
    <RadioGroup
      name="more options"
      orientation={'vertical'}
      options={[
        { value: 'a', label: 'Option A' },
        { value: 'b', label: 'Option B' },
        { value: 'c', label: 'Option C', disabled: true },
      ]}
      onChange={(option) => {
        figma.notify(option.value);
      }}
    />
  );
}

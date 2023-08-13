import { RadioGroup } from 'fidget-ui';

export function RadioGroupDemo() {
  return (
    <RadioGroup
      name={'radio-doc/a'}
      options={[
        { value: 'dogs', label: 'Dogs' },
        { value: 'cats', label: 'Cats' },
        { value: 'sheep', label: 'Sheep' },
      ]}
      onChange={({ value }) => figma.notify(`You selected ${value}.`)}
    />
  );
}

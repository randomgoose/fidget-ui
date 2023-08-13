import { RadioGroup } from 'fidget-ui';

export function Orientation() {
  return (
    <RadioGroup
      orientation="vertical"
      name={'radio/orientation-vertical'}
      options={[
        { value: 'dogs', label: 'Dogs' },
        { value: 'cats', label: 'Cats' },
        { value: 'sheep', label: 'Sheep' },
      ]}
    />
  );
}

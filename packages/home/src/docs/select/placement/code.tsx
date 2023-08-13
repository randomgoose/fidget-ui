import { Select } from 'fidget-ui';

const OPTIONS: any[] = [
  { value: 'alpha', label: 'Alpha' },
  { value: 'beta', label: 'Beta' },
  { value: 'gamma', label: 'Gamma' },
];

export function SelectPlacement() {
  return (
    <Select id="bu4k" placeholder="Select a letter" width={240} options={OPTIONS} placement="top" />
  );
}

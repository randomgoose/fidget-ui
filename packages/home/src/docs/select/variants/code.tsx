import { Select } from 'fidget-ui';

const OPTIONS: any[] = [
  { value: 'alpha', label: 'Alpha' },
  { value: 'beta', label: 'Beta' },
  { value: 'gamma', label: 'Gamma' },
];

export function SelectVariants() {
  return (
    <>
      {['filled', 'outline', 'flush'].map((variant) => (
        <Select
          key={variant}
          id="hu53"
          variant={variant as any}
          placeholder="Select a letter"
          width={128}
          options={OPTIONS}
        />
      ))}
    </>
  );
}

import { CheckboxGroup } from 'fidget-ui';

export function CheckboxCheckboxGroup() {
  return (
    <CheckboxGroup
      name="languages"
      orientation="vertical"
      options={[
        { label: 'JavaScript', value: 'javascript' },
        { label: 'TypeScript', value: 'typescript' },
        { label: 'Rust', value: 'rust', disabled: true },
      ]}
    />
  );
}

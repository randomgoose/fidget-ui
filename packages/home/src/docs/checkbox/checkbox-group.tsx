import { CheckboxGroup, Heading } from 'fidget-ui';
import { Case } from '../../components/case';
import { Preview } from '../../components/preview';

export function CheckboxCheckboxGroup() {
  return (
    <>
      <Heading as="h5">Checkbox group</Heading>
      <Preview
        id="checkbox/checkbox-group"
        code={`import { CheckboxGroup } from 'fidget-ui'

() => <CheckboxGroup
    name="languages"
    orientation="vertical"
    options={[
        { label: 'JavaScript', value: 'javascript' },
        { label: 'TypeScript', value: 'typescript' },
        { label: 'Rust', value: 'rust', disabled: true },
    ]}
/>`}
      >
        <Case height={240}>
          <CheckboxGroup
            name="languages"
            orientation="vertical"
            options={[
              { label: 'JavaScript', value: 'javascript' },
              { label: 'TypeScript', value: 'typescript' },
              { label: 'Rust', value: 'rust', disabled: true },
            ]}
          />
        </Case>
      </Preview>
    </>
  );
}

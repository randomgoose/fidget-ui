import { Heading, Checkbox } from 'fidget-ui';
import { Case } from '../../components/case';
import { Preview } from '../../components/preview';

export function DisabledCheckbox() {
  return (
    <>
      <Heading as="h5">Disabled Checkbox</Heading>

      <Preview
        id="checkbox/disabled-checkbox"
        code={`import { Checkbox } from 'fidget-ui'

() => <Checkbox id="p03j" disabled>Disabled</Checkbox>`}
      >
        <Case height={240}>
          <Checkbox id="p03j" disabled>
            Disabled
          </Checkbox>
        </Case>
      </Preview>
    </>
  );
}

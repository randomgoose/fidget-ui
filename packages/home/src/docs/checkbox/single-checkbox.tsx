import { Checkbox, Heading } from 'fidget-ui';
import { Case } from '../../components/case';
import { Preview } from '../../components/preview';

const { useSyncedState, Text } = figma.widget;

export function SingleCheckbox() {
  const [checked, setChecked] = useSyncedState<boolean>('up04', false);

  return (
    <>
      <Heading as="h5">Single checkbox</Heading>

      <Preview
        id="checkbox/single-checkbox"
        code={`import { Checkbox } from 'fidget-ui'

const { useSyncedState, Text } = figma.widget

function SingleCheckbox() {
    const [checked, setChecked] = useSyncedState('checked', false);

    return <Checkbox
            checked={checked}
            onChange={(value) => setChecked(value)}>
                <Text>Happy? {checked ? 'Yes!' : 'No.'}</Text>
        </Checkbox>
}`}
      >
        <Case height={240}>
          <Checkbox id="" checked={checked} onChange={(value) => setChecked(value)}>
            <Text>Happy? {checked ? 'Yes!' : 'No.'}</Text>
          </Checkbox>
        </Case>
      </Preview>
    </>
  );
}

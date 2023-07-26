import { Heading, TextField } from 'fidget-ui';
import { Case } from '../../components/case';
import { P, Pre } from '../typography';
import { Preview } from '../../components/preview';

const { useSyncedState } = figma.widget;

export function TextFieldUsage() {
  const [value, setValue] = useSyncedState('text-field/value', '');

  return (
    <>
      <Heading as="h5">Usage</Heading>

      <P>
        Use <Pre>TextField</Pre> component in the same way of <Pre>Input</Pre>. Pass{' '}
        <Pre>value</Pre> and <Pre>onTextEditEnd</Pre> to enable text editing.
      </P>

      <Preview
        id="text-field/usage"
        code={`import { TextField } from 'fidget-ui'

const { useSyncedState } = figma.widget

function TextFieldUsage() {
    const [value, setValue] = useSyncedState('value', value)

    return <TextField
        id="p9o5"
        value={value}
        onTextEditEnd={(e) => setValue(e.characters)}
        placeholder={'Type something'}
        width={240}
    />
}`}
      >
        <Case height={240} spacing={8} padding={{ horizontal: 48 }}>
          <TextField
            id="p9o5"
            value={value}
            onTextEditEnd={(e) => setValue(e.characters)}
            placeholder={'Type something'}
            width={240}
          />
        </Case>
      </Preview>
    </>
  );
}

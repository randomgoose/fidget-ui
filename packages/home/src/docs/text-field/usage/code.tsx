import { TextField } from 'fidget-ui';

const { useSyncedState } = figma.widget;

export function TextFieldUsage() {
  const [value, setValue] = useSyncedState('text-field/value', '');

  return (
    <TextField
      id="p9o5"
      value={value}
      onTextEditEnd={(e) => setValue(e.characters)}
      placeholder={'Type something'}
      width={240}
    />
  );
}

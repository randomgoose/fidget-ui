import { Select } from 'fidget-ui';
import { P } from '../../typography';

const { useSyncedState } = figma.widget;

const OPTIONS: any[] = [
  { value: 'alpha', label: 'Alpha' },
  { value: 'beta', label: 'Beta' },
  { value: 'gamma', label: 'Gamma' },
];

export function SelectUsage() {
  const [letter, setLetter] = useSyncedState('02j4', 'alpha');

  return (
    <>
      <P horizontalAlignText="center">You selected: {letter}</P>
      <Select
        id={'u4n0'}
        placeholder="Select a letter"
        width={240}
        options={OPTIONS}
        onChange={(option) => setLetter(option.value)}
      />
    </>
  );
}

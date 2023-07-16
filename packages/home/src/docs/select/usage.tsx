import { Heading, Select, Tabs } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code, P, Pre } from '../typography';

const { useSyncedState } = figma.widget;

const OPTIONS: any[] = [
  { value: 'alpha', label: 'Alpha' },
  { value: 'beta', label: 'Beta' },
  { value: 'gamma', label: 'Gamma' },
];

export default function SelectUsage() {
  const [letter, setLetter] = useSyncedState('02j4', 'alpha');

  return (
    <>
      <Heading as="h5">Usage</Heading>
      <P>
        Pass in an array of options and get user selection from the <Pre>onChange</Pre> callback.
      </P>
      <Tabs
        id="select/usage"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={480} spacing={8} direction="vertical">
                <P horizontalAlignText="center">You selected: {letter}</P>
                <Select
                  id={'u4n0'}
                  placeholder="Select a letter"
                  width={240}
                  options={OPTIONS}
                  onChange={(option) => setLetter(option.value)}
                />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={480}>
                {`const [letter, setLetter] = useSyncedState('02j4', 'alpha')

() => (
    <>
        <P horizontalAlignText='center'>You selected: {letter}</P>
        <Select
            id={'u4n0'}
            placeholder="Select a letter"
            width={240}
            options={OPTIONS}
            onChange={(option) => setLetter(option.value)}
        />
    </>
)
`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}

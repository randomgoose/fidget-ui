import { Heading, Divider, Checkbox, CheckboxGroup, Tabs } from 'fidget-ui';
import { docStyle } from './styles';
import { Code, P } from './typography';
import { Case } from '../components/case';

const { AutoLayout, useSyncedState, Text } = figma.widget;

export function CheckboxDoc() {
  const [checked, setChecked] = useSyncedState<boolean>('checkbox/a', false);

  return (
    <AutoLayout name="Checkbox Doc" {...docStyle}>
      <Heading as="h1">Checkbox</Heading>
      <P>Checkboxes are used when users need to select multiple items from a series of options.</P>
      <Divider />
      <Code>{`import { Checkbox, CheckboxGroup } from "fidget-ui"`}</Code>
      <Heading as="h5">Single checkbox</Heading>

      <Tabs
        id="checkbox/single-checkbox"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <Checkbox checked={checked} onChange={(value) => setChecked(value)}>
                  <Text>Happy? {checked ? 'Yes!' : 'No.'}</Text>
                </Checkbox>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Checkbox
  checked={checked}
  onChange={(value) => setChecked(value)}>
  <Text>Happy? {checked ? 'Yes!' : 'No.'}</Text>
</Checkbox>`}
              </Code>
            ),
          },
        ]}
      />

      <Heading>Disabled Checkbox</Heading>

      <Tabs
        id="checkbox/disabled-checkbox"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <Checkbox disabled>Disabled</Checkbox>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: <Code height={240}>{`<Checkbox disabled>Disabled</Checkbox>`}</Code>,
          },
        ]}
      />

      <Heading as="h5">Checkbox group</Heading>

      <Tabs
        id="checkbox/checkbox-group"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
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
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<CheckboxGroup
  name="languages"
  orientation="vertical"
  options={[
    { label: 'JavaScript', value: 'javascript' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'Rust', value: 'rust', disabled: true },
]}/>`}
              </Code>
            ),
          },
        ]}
      />
    </AutoLayout>
  );
}

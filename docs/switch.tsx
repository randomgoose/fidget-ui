import { Button, Heading, Switch, Divider, colors } from '../src/components';
import { codeStyle, docStyle } from './styles';
import { Code, P, Pre } from './typography';

const { AutoLayout, useSyncedState, Span } = figma.widget;

export function SwitchDoc() {
  const [checked, setChecked] = useSyncedState('switch/checked', false);
  const [, setCurrentPage] = useSyncedState('currentPage', 'switch');

  return (
    <AutoLayout {...docStyle} name={'Switch Doc'}>
      <Heading as="h1">Switch</Heading>
      <P>Switch copmonent is used to toggle between two states.</P>
      <Divider />
      <Code width={'fill-parent'}>{`import { Switch } from "fidget-ui"`}</Code>
      <Heading as="h5">Usage</Heading>
      <AutoLayout direction="vertical" spacing={4} width={'fill-parent'}>
        <P>Use a Switch component to toggle states.</P>
        <P>
          · Pass a <Pre>defaultChecked</Pre> prop to set the initial state of a Switch.
        </P>
        <P>
          · Pass a <Pre>onChange</Pre> callback to get
        </P>
      </AutoLayout>
      <AutoLayout width={'fill-parent'} fill={colors.blue[50]} padding={16} cornerRadius={6}>
        <P fill={colors.blue[900]}>
          Notice: A unique <Span {...codeStyle}>id</Span> is required to differentiate states of
          multiple Switch components.
        </P>
      </AutoLayout>
      <Switch
        id="ht5o"
        onChange={(checked) => {
          figma.notify(`Switched ${checked ? 'on' : 'off'}.`);
        }}
      />

      <Heading as="h5">Controlled Switch</Heading>
      <P>
        Pass a <Pre>checked</Pre> prop to control the state of a Switch. Controlled Switch
        components do not require an <Pre>id</Pre>.
      </P>
      <AutoLayout spacing={8} verticalAlignItems={'center'}>
        <Button size="sm" variant="outline" onClick={() => setChecked((prev) => !prev)}>
          Toggle
        </Button>
        <Switch checked={checked} />
      </AutoLayout>

      <Heading as="h5">Sizes</Heading>
      <P>
        Switch component comes in three sizes: <Pre>sm(16px), md(20px)</Pre> and <Pre>lg(28px)</Pre>
        .
      </P>
      <AutoLayout spacing={8}>
        <Switch size="sm" id="s" />
        <Switch id="m" />
        <Switch size="lg" id="l" />
      </AutoLayout>

      <Heading as="h5">Customize Switch colors</Heading>
      <P onClick={() => setCurrentPage('colors')}>
        Pass a <Pre>colorScheme</Pre> prop to set the background color of Switch components. See{' '}
        <Span fill={colors.blue[500]}>Colors</Span> for available color schemes.
      </P>
      <AutoLayout spacing={8}>
        <Switch id="kfrh" colorScheme="emerald" defaultChecked />
        <Switch id="21jd" colorScheme="orange" defaultChecked />
        <Switch id="39dk" colorScheme="neutral" defaultChecked />
      </AutoLayout>

      <Heading as="h5">Disabled Switch</Heading>
      <AutoLayout spacing={8}>
        <Switch disabled checked />
        <Switch disabled checked={false} />
      </AutoLayout>
    </AutoLayout>
  );
}

import { Button, Heading, Switch, Divider, colors, Tabs } from 'fidget-ui';
import { docStyle } from './styles';
import { Code, P, Pre } from './typography';
import { Case } from '../components/case';

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

      <Tabs
        id="swtich/single-checkbox"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <Switch
                  id="ht5o"
                  onChange={(checked) => {
                    figma.notify(`Switched ${checked ? 'on' : 'off'}.`);
                  }}
                />
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

      <Heading as="h5">Controlled Switch</Heading>
      <P>
        Pass a <Pre>checked</Pre> prop to control the state of a Switch. Controlled Switch
        components do not require an <Pre>id</Pre>.
      </P>

      <Tabs
        id="swtich/controlled-swtich"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <AutoLayout spacing={8} verticalAlignItems={'center'}>
                  <Button size="sm" variant="outline" onClick={() => setChecked((prev) => !prev)}>
                    Toggle
                  </Button>
                  <Switch id="hk91" checked={checked} />
                </AutoLayout>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<AutoLayout spacing={8} verticalAlignItems={'center'}>
  <Button size="sm" variant="outline" onClick={() => setChecked((prev) => !prev)}>
    Toggle
  </Button>
  <Switch id='hk91' checked={checked} />
</AutoLayout>`}
              </Code>
            ),
          },
        ]}
      />

      <Heading as="h5">Sizes</Heading>
      <P>
        Switch component comes in three sizes: <Pre>sm(16px), md(20px)</Pre> and <Pre>lg(28px)</Pre>
        .
      </P>

      <Tabs
        id="swtich/sizes"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} spacing={8}>
                <Switch size="sm" id="s" />
                <Switch id="m" />
                <Switch size="lg" id="l" />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Switch size="sm" id="s" />
<Switch id="m" />
<Switch size="lg" id="l" />`}
              </Code>
            ),
          },
        ]}
      />

      <Heading as="h5">Customize Switch colors</Heading>
      <P onClick={() => setCurrentPage('colors')}>
        Pass a <Pre>colorScheme</Pre> prop to set the background color of Switch components. See{' '}
        <Span fill={colors.blue[500]}>Colors</Span> for available color schemes.
      </P>

      <Tabs
        id="swtich/customize-switch-colors"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} spacing={8}>
                <Switch id="kfrh" colorScheme="emerald" defaultChecked />
                <Switch id="21jd" colorScheme="orange" defaultChecked />
                <Switch id="39dk" colorScheme="neutral" defaultChecked />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Switch id="kfrh" colorScheme="emerald" defaultChecked />
<Switch id="21jd" colorScheme="orange" defaultChecked />
<Switch id="39dk" colorScheme="neutral" defaultChecked />`}
              </Code>
            ),
          },
        ]}
      />

      <Heading as="h5">Disabled Switch</Heading>

      <Tabs
        id="swtich/disabled-switch"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} spacing={8}>
                <Switch id="p2j5" disabled checked />
                <Switch id="j6k3" disabled checked={false} />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Switch id='p2j5' disabled checked />
<Switch id='j6k3' disabled checked={false} />`}
              </Code>
            ),
          },
        ]}
      />
    </AutoLayout>
  );
}

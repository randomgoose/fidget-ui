import { Heading, RadioGroup, Select, Divider, Tabs, TabPaneProps } from 'fidget-ui';
import { docStyle } from './styles';
import { P, Pre } from './typography';

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

const items: TabPaneProps[] = [
  { key: 1, tab: 'Table View', children: 'Tab Content 1' },
  { key: 2, tab: 'Board View', children: 'Tab Content 2' },
  { key: 3, tab: 'Form View', children: 'Tab Content 3' },
];

const variants: any[] = [
  { value: 'line', label: 'Line' },
  { value: 'enclosed', label: 'Enclosed' },
  { value: 'soft-rounded', label: 'Soft Rounded' },
  { value: 'solid-rounded', label: 'Solid Rounded' },
];

const colorSchemes = [
  'neutral',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

export function TabsDoc() {
  const [activeKey, setActiveKey] = useSyncedState<string | number>('tabs/active-key', 1);
  const [variant, setVariant] = useSyncedState<any>('tabs/variant', 'line');
  const [colorScheme, setColorScheme] = useSyncedState<any>('tabs/color-scheme', 'blue');

  return (
    <AutoLayout {...docStyle} name="Tabs Doc">
      <Heading as="h1">Tabs</Heading>
      <P>Tab components allow users to navigate between multiple panels.</P>
      <Divider />

      <Heading as="h5">Usage</Heading>

      <P>
        Pass an array of tab objects to the <Pre>items</Pre> prop. Each tab object contains:
      </P>
      <AutoLayout name="Col" direction={'vertical'} width={'fill-parent'}>
        <P>
          · <Pre>key(required)</Pre>: Each tab should have a unique key.
        </P>
        <P>
          · <Pre>tab</Pre>: the label of each tab.{' '}
        </P>
        <P>
          · <Pre>content</Pre>: the content in each tab panel.
        </P>
      </AutoLayout>
      <P>
        You can pass a <Pre>defaultActiveKey</Pre> prop to initially enable a tab.
      </P>

      <Tabs id="pk82" items={items} />

      <Heading as="h5">Variants and color schemes</Heading>
      <P>
        The Tabs component has four variants: <Pre>line, enclosed, soft-rounded</Pre> and{' '}
        <Pre>solid-rounded</Pre>.
      </P>
      <AutoLayout direction={'vertical'} spacing={8}>
        <Heading as="h6">Variants</Heading>
        <RadioGroup
          name="tabs-variant"
          options={variants}
          onChange={(option) => setVariant(option.value as any)}
        />
      </AutoLayout>

      <AutoLayout direction="vertical" spacing={8} overflow={'visible'}>
        <Heading as="h6">Color Scheme</Heading>
        <Select
          id="any"
          placement="top"
          options={colorSchemes.map((color) => ({ label: color, value: color }))}
          width={240}
          onChange={(option) => setColorScheme(option.value as any)}
        />
      </AutoLayout>

      <Tabs
        variant={variant}
        colorScheme={colorScheme}
        items={items}
        activeKey={activeKey}
        onChange={(key: any) => setActiveKey(key)}
      />

      <Heading as="h5">Fitted tabs</Heading>
      <P>
        Pass <Pre>isFitted</Pre> prop to make the tab list fill its container.
      </P>

      <Tabs
        items={items}
        isFitted
        activeKey={activeKey}
        onChange={(key: any) => setActiveKey(key)}
        variant={'enclosed'}
      />

      <Heading as="h5">Disable a tab</Heading>
    </AutoLayout>
  );
}

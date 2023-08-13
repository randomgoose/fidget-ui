import { Heading, RadioGroup, Select, TabPaneProps, Tabs } from 'fidget-ui';
import { Option } from 'fidget-ui/dist/radio/interface';

const { useSyncedState, AutoLayout } = figma.widget;

const items: TabPaneProps[] = [
  { key: 1, tab: 'Table View', children: 'Tab Content 1' },
  { key: 2, tab: 'Board View', children: 'Tab Content 2' },
  { key: 3, tab: 'Form View', children: 'Tab Content 3' },
];

const variants: Option[] = [
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

export function TabsVariants() {
  const [variant, setVariant] = useSyncedState<any>('tabs/variant', 'line');
  const [colorScheme, setColorScheme] = useSyncedState<any>('tabs/color-scheme', 'blue');

  return (
    <>
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

      <Tabs id="jv3r" variant={variant} colorScheme={colorScheme} items={items} />
    </>
  );
}

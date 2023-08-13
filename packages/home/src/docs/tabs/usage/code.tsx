import { Tabs, TabPaneProps } from 'fidget-ui';

const items: TabPaneProps[] = [
  { key: 1, tab: 'Table View', children: 'Tab Content 1' },
  { key: 2, tab: 'Board View', children: 'Tab Content 2' },
  { key: 3, tab: 'Form View', children: 'Tab Content 3' },
];

export function TabsUsage() {
  return <Tabs id="pk82" items={items} />;
}

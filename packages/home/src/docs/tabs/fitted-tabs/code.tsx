import { TabPaneProps, Tabs } from 'fidget-ui';

const items: TabPaneProps[] = [
  { key: 1, tab: 'Table View', children: 'Tab Content 1' },
  { key: 2, tab: 'Board View', children: 'Tab Content 2' },
  { key: 3, tab: 'Form View', children: 'Tab Content 3' },
];

export function FittedTabs() {
  return <Tabs id="kl32" items={items} isFitted variant={'enclosed'} />;
}

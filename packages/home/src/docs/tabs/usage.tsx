import { Heading, TabPaneProps, Tabs } from 'fidget-ui';
import { Code, P, Pre } from '../typography';
import { Case } from '../../components/case';

const { AutoLayout } = figma.widget;

const items: TabPaneProps[] = [
  { key: 1, tab: 'Table View', children: 'Tab Content 1' },
  { key: 2, tab: 'Board View', children: 'Tab Content 2' },
  { key: 3, tab: 'Form View', children: 'Tab Content 3' },
];

export default function TabsUsage() {
  return (
    <>
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

      <Tabs
        id="tabs/usage"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case padding={72} height={240}>
                <Tabs id="pk82" items={items} />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code>
                {`const items: TabPaneProps[] = [
    { key: 1, tab: 'Table View', children: 'Tab Content 1' },
    { key: 2, tab: 'Board View', children: 'Tab Content 2' },
    { key: 3, tab: 'Form View', children: 'Tab Content 3' },
];

() => <Tabs id="pk82" items={items} />
`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}

import { Heading, TabPaneProps, Tabs } from 'fidget-ui';
import { Code, P, Pre } from '../typography';
import { Case } from '../../components/case';

const items: TabPaneProps[] = [
  { key: 1, tab: 'Table View', children: 'Tab Content 1' },
  { key: 2, tab: 'Board View', children: 'Tab Content 2' },
  { key: 3, tab: 'Form View', children: 'Tab Content 3' },
];

export default function FittedTabs() {
  return (
    <>
      <Heading as="h5">Fitted tabs</Heading>

      <P>
        Pass <Pre>isFitted</Pre> prop to make the tab list fill its container.
      </P>

      <Tabs
        id="tabs/fitted-tabs"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} padding={72}>
                <Tabs id="kl32" items={items} isFitted variant={'enclosed'} />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Tabs
    id='kl32'
    items={items}
    isFitted
    variant={'enclosed'}
/>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}

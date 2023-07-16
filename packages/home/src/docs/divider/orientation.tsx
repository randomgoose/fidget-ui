import { Heading, Divider, Tabs } from 'fidget-ui';
import { Code, P, Pre } from '../typography';
import { Case } from '../../components/case';

const { AutoLayout, Text } = figma.widget;

export default function DividerOrientation() {
  return (
    <>
      <Heading as="h5">Orientation</Heading>
      <P>
        Set the orientation of a Divider with <Pre>oritentation</Pre> prop. It can either be{' '}
        <Pre>horizontal</Pre> or <Pre>vertical</Pre>.
      </P>

      <Tabs
        id="divider/orientation"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <AutoLayout>
                  <Text>Item 1</Text>
                  <Divider orientation={'vertical'} />
                  <Text>Item 2</Text>
                  <Divider orientation={'vertical'} />
                  <Text>Item 3</Text>
                </AutoLayout>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<AutoLayout>
    <Text>Item 1</Text>
    <Divider orientation={'vertical'} />
    <Text>Item 2</Text>
    <Divider orientation={'vertical'} />
    <Text>Item 3</Text>
</AutoLayout>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}

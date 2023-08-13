import { Divider } from 'fidget-ui';

const { AutoLayout, Text } = figma.widget;

export function DividerOrientation() {
  return (
    <>
      <AutoLayout>
        <Text>Item 1</Text>
        <Divider orientation={'vertical'} />
        <Text>Item 2</Text>
        <Divider orientation={'vertical'} />
        <Text>Item 3</Text>
      </AutoLayout>
    </>
  );
}

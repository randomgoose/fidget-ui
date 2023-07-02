import { Heading, SimpleGrid, colors, Divider } from 'fidget-ui';
import { codeStyle, docStyle } from './styles';

const { widget } = figma;
const { AutoLayout, Text, Span } = widget;

const blockStyle: AutoLayoutProps = {
  fill: colors.neutral[50],
  stroke: colors.neutral[200],
  width: 'fill-parent',
  height: 48,
  verticalAlignItems: 'center',
  horizontalAlignItems: 'center',
  cornerRadius: 6,
};

export function SimpleGridDoc() {
  const blocks = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
    <AutoLayout key={num} {...blockStyle}>
      <Text fill={colors.neutral[700]}>{num + 1}</Text>
    </AutoLayout>
  ));

  return (
    <AutoLayout name="Simple Grid Doc" {...docStyle}>
      <Heading as="h1">Simple Grid</Heading>
      <Text>
        SimpleGrid mimics a grid layout with <Span {...codeStyle}>AutoLayout</Span>.
      </Text>
      <Divider />

      <Heading as="h5">Usage</Heading>
      <Text>
        Specify the number of <Span {...codeStyle}>columns</Span> for the grid layout.
      </Text>
      <SimpleGrid height={'hug-contents'}>{...blocks}</SimpleGrid>

      <Heading as="h5">Spacing</Heading>
      <Text>
        Pass in a number to <Span {...codeStyle}>spacing</Span> prop to set the gap between rows and
        columns.
      </Text>

      <SimpleGrid spacing={24} height={'hug-contents'}>
        {...blocks}
      </SimpleGrid>

      <Text>
        Or assign <Span {...codeStyle}>spacingX</Span> and <Span {...codeStyle}>spacingY</Span>{' '}
        respectively.
      </Text>

      <SimpleGrid height={'hug-contents'} spacingX={72} spacingY={16}>
        {...blocks}
      </SimpleGrid>
    </AutoLayout>
  );
}

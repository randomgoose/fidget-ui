import { Heading, Divider, colors } from 'fidget-ui';
import { docStyle } from './styles';
import { Code, P, Pre } from './typography';

const { widget } = figma;
const { AutoLayout, Text } = widget;

const style: TextProps = {
  fontSize: 14,
  lineHeight: 22,
  fill: colors.neutral[400],
};

export function HeadingDoc() {
  return (
    <AutoLayout {...docStyle} name="Heading Doc">
      <Heading as={'h1'}>Heading</Heading>
      <P>Heading component renders different levels of headings.</P>
      <Divider />

      <Heading as="h5">Heading levels</Heading>
      <P>
        There are six levels of heading. Pass <Pre>h1</Pre> to <Pre>h6</Pre> to the <Pre>as</Pre>{' '}
        prop to render different heading levels.
      </P>

      <Code>
        {`<AutoLayout name="Flex" direction="vertical">
    <Heading as="h1">Heading 1</Heading>
    <Heading as="h2">Heading 2</Heading>
    <Heading as="h3">Heading 3</Heading>
    <Heading as="h4">Heading 4</Heading>
    <Heading as="h5">Heading 5</Heading>
    <Heading as="h6">Heading 6</Heading>
</AutoLayout>`}
      </Code>

      <AutoLayout name="Flex" direction="vertical">
        <Heading as="h1">Heading 1</Heading>
        <Text {...style}>Font Size: 36px; Line Height: 54px;</Text>
        <Heading as="h2">Heading 2</Heading>
        <Text {...style}>Font Size: 32px; Line Height: 48px;</Text>
        <Heading as="h3">Heading 3</Heading>
        <Text {...style}>Font Size: 28px; Line Height: 42px;</Text>
        <Heading as="h4">Heading 4</Heading>
        <Text {...style}>Font Size: 24px; Line Height: 36px;</Text>
        <Heading as="h5">Heading 5</Heading>
        <Text {...style}>Font Size: 20px; Line Height: 30px;</Text>
        <Heading as="h6">Heading 6</Heading>
        <Text {...style}>Font Size: 16px; Line Height: 24px;</Text>
      </AutoLayout>
    </AutoLayout>
  );
}

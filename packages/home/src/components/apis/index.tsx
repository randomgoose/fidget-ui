import { Heading } from 'fidget-ui';
const { AutoLayout, Text } = figma.widget;

export function APIs({ code }: { code: string }) {
  if (!code) {
    return null;
  }

  return (
    <AutoLayout direction="vertical">
      <Heading as="h5">APIs</Heading>
      <Text>{code}</Text>
    </AutoLayout>
  );
}

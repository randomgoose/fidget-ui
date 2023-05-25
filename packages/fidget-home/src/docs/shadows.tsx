import { Heading, colors, shadows } from 'fidget-ui';
import { docStyle } from './styles';
import { Code, P } from './typography';

const { AutoLayout, Text } = figma.widget;

export function ShadowsDoc() {
  return (
    <AutoLayout {...docStyle} overflow="visible">
      <Heading as="h1">Shadows</Heading>
      <AutoLayout spacing={16} overflow="visible">
        {Object.entries(shadows).map(([name, effect]) => (
          <AutoLayout
            direction={'vertical'}
            horizontalAlignItems={'center'}
            spacing={8}
            overflow="visible"
          >
            <AutoLayout
              fill={colors.white}
              cornerRadius={8}
              stroke={colors.neutral[200]}
              width={48}
              height={48}
              effect={effect}
              overflow="visible"
            />
            <Text fontSize={12}>{name}</Text>
          </AutoLayout>
        ))}
      </AutoLayout>
      {/* <Code>import { shadows } from</Code> */}
      <P></P>
    </AutoLayout>
  );
}

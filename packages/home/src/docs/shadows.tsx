import { Divider, Heading, colors, shadows } from 'fidget-ui';
import { docStyle } from './styles';
import { Code, P, Pre } from './typography';
import { Case } from '../components/case';

const { AutoLayout, Text } = figma.widget;

export function ShadowsDoc() {
  return (
    <AutoLayout {...docStyle} overflow="visible">
      <Heading as="h1">Shadows</Heading>
      <P>Use shadow styles from TailwindCSS.</P>
      <Divider />

      <Code>{`import { shadows } from 'fidget-ui'`}</Code>

      <Heading as="h5">Usage</Heading>
      <P>
        Import the <Pre>shadows</Pre> object
      </P>

      <Case spacing={32}>
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
      </Case>
      {/* <Code>import { shadows } from</Code> */}
      <P></P>
    </AutoLayout>
  );
}

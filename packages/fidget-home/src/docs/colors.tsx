import { Heading, Divider, colors } from 'fidget-ui';
import { docStyle } from './styles';
import { Code, P, Pre } from './typography';

const { widget } = figma;
const { AutoLayout, Rectangle, Text, Span } = widget;

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <AutoLayout name="Swatch" direction={'vertical'} spacing={4}>
      <Rectangle
        name={'Color'}
        width={48}
        height={24}
        fill={value}
        cornerRadius={4}
        stroke={{ type: 'solid', color: { r: 0, g: 0, b: 0, a: 0.04 } }}
      />
      <Text name="Color Name" fontSize={12} lineHeight={12}>
        {name}
      </Text>
      <Text
        name="Color Name"
        fontSize={12}
        lineHeight={12}
        fill={colors.neutral[400]}
        fontFamily={'Fira Code'}
      >
        {value}
      </Text>
    </AutoLayout>
  );
}

export function ColorsDoc() {
  return (
    <AutoLayout name="Colors" {...docStyle}>
      <Heading as="h1">Colors</Heading>
      <P>
        Fidget UI is built based on colors from{' '}
        <Span href="https://tailwindcss.com/docs/customizing-colors" fill={colors.blue[500]}>
          Tailwind CSS.
        </Span>
      </P>
      <Divider />
      <Code width={'fill-parent'}>{`import { colors } from "fidget-ui/colors"`}</Code>
      <Heading as="h5">Usage</Heading>
      <P>
        <Pre>colors</Pre> is a object containing hex values of all colors. To use a specific color:
      </P>
      <Code width={'fill-parent'}>
        {`colors.white; // #ffffff
colors.black; // #000000
colors.blue[500]; // #3b82f6`}
      </Code>
      <P>
        Some components have a <Pre>colorScheme</Pre> prop. Pass the name of hues to customize
        colors of these components.
      </P>
      <Code width={'fill-parent'}>{`<Button colorScheme="red">Danger</Button>`}</Code>

      {/* <Code width={"fill-parent"}>{`import { colors } from "fidget-ui/colors"`}</Code> */}

      <Heading as="h5">Palette</Heading>
      <P>Click a swatch to copy its hex value.</P>
      {Object.entries(colors).map(([name, colors]) => (
        <AutoLayout key={name} direction={'vertical'} spacing={4}>
          <Heading as="h6" textCase={'title'}>
            {name}
          </Heading>
          <AutoLayout name="Swatches" spacing={12}>
            {typeof colors === 'string' ? (
              <Swatch name={name} value={colors} />
            ) : (
              Object.entries(colors).map(([name, value], index) => (
                <Swatch name={name} value={value} key={index} />
              ))
            )}
          </AutoLayout>
        </AutoLayout>
      ))}
    </AutoLayout>
  );
}

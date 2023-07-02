import { Button, IconButton, colors } from 'fidget-ui';
import { IconDocument } from 'fidget-ui/icons';

const { widget } = figma;
const { AutoLayout, Text, Span } = widget;

export function Code({ children, ...rest }: AutoLayoutProps) {
  return (
    <AutoLayout
      name="Code"
      cornerRadius={6}
      fill={colors.neutral[900]}
      width={'fill-parent'}
      padding={16}
      {...rest}
    >
      <Text fontFamily="Fira Code" fill={'#ffffff'} fontSize={12}>
        {children as string}
      </Text>

      <IconButton
        positioning='absolute'
        x={{ type: "right", offset: 8 }}
        y={{ type: "bottom", offset: 8 }}
        icon={<IconDocument />}
        onClick={() => new Promise(() => {
          figma.showUI(__html__, {
            position: { x: -99999, y: -99999 },
            width: 0,
            height: 0
          })
          figma.ui.postMessage({
            type: "COPY",
            payload: children
          })
        })}
      />
    </AutoLayout>
  );
}

export function P({ children, ...rest }: TextProps) {
  return (
    <Text
      fill={colors.neutral[900]}
      {...rest}
      name={'Paragraph'}
      fontSize={14}
      lineHeight={22}
      width={'fill-parent'}
    >
      {children}
    </Text>
  );
}

export function Pre({ children, ...rest }: SpanProps) {
  return (
    <Span {...rest} fill={colors.indigo[500]} fontFamily={'Fira Code'}>
      {children}
    </Span>
  );
}

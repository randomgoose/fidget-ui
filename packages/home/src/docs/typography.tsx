import { colors } from 'fidget-ui';

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

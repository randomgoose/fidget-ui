import { colors } from 'fidget-ui';

const { AutoLayout } = figma.widget;

export function Case({
  children,
  height,
  ...rest
}: { children: FigmaDeclarativeNode; height?: AutoLayoutProps['height'] } & AutoLayoutProps) {
  return (
    <AutoLayout
      verticalAlignItems="center"
      horizontalAlignItems="center"
      stroke={colors.neutral[200]}
      width={'fill-parent'}
      height={height || 400}
      overflow="visible"
      cornerRadius={6}
      {...rest}
    >
      {children}
    </AutoLayout>
  );
}

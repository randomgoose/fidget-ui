import { colors } from '../styles';

const { AutoLayout, Rectangle } = figma.widget;

export function MenuDivider() {
  return (
    <AutoLayout name="Menu Divider" width={'fill-parent'} padding={{ vertical: 2 }}>
      <Rectangle width={'fill-parent'} height={1} fill={colors.neutral[200]} />
    </AutoLayout>
  );
}

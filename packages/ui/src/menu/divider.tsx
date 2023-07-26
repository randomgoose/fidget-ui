import { colors } from '../styles';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout, Rectangle } = figma.widget;

export function MenuDivider() {
  return (
    <AutoLayout name={NODE_NAME_MAP.divider} width="fill-parent" padding={{ vertical: 2 }}>
      <Rectangle width="fill-parent" height={1} fill={colors.neutral[200]} />
    </AutoLayout>
  );
}

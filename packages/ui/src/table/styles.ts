import { colors } from '../styles';
import { ElementProps } from '../types';

export const getTableStyles = (): {
  container: AutoLayoutProps;
  cell: ElementProps;
  head: ElementProps;
  body: AutoLayoutProps;
  header: AutoLayoutProps;
  row: AutoLayoutProps;
} => {
  return {
    container: {
      direction: 'vertical',
      spacing: 1,
      fill: '#fff',
    },
    cell: {
      height: 56,
      verticalAlignItems: 'center',
      fontSize: 14,
      color: colors.neutral[700],
      padding: { left: 16 },
    },
    header: {
      width: 'fill-parent',
      overflow: 'visible',
    },
    body: {
      width: 'fill-parent',
      direction: 'vertical',
      overflow: 'visible',
    },
    row: {
      width: 'fill-parent',
      overflow: 'visible',
    },
    head: {
      width: 'fill-parent',
      height: 56,
      fill: colors.neutral[50],
      fontSize: 14,
      fontWeight: 'medium',
      verticalAlignItems: 'center',
      padding: { left: 16 },
      effect: [{ type: 'drop-shadow', offset: { y: 1, x: 0 }, blur: 0, color: '#E5E5E5' }],
    },
  };
};

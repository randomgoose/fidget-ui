import { colors, shadows } from '../styles';

export const getCardStyles = (): {
  container: AutoLayoutProps;
  header: AutoLayoutProps;
  body: AutoLayoutProps;
  footer: AutoLayoutProps;
} => {
  return {
    container: {
      cornerRadius: 8,
      stroke: colors.neutral[200],
      effect: shadows.sm,
      direction: 'vertical',
    },
    header: {
      width: 'fill-parent',
      padding: { vertical: 16, horizontal: 20 },
    },
    body: {
      width: 'fill-parent',
      padding: { top: 0, bottom: 20, horizontal: 20 },
    },
    footer: {
      width: 'fill-parent',
      padding: { top: 0, bottom: 20, horizontal: 20 },
    },
  };
};

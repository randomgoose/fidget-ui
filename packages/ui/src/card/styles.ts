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
      padding: 16,
    },
    body: {
      padding: 16,
    },
    footer: {
      padding: 16,
    },
  };
};

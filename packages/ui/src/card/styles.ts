import { colors, shadows } from '../styles';
import { CardBodyProps, CardFooterProps, CardHeaderProps, CardProps } from './interface';

export const getCardStyles = (): {
  container: CardProps;
  header: CardHeaderProps;
  body: CardBodyProps;
  footer: CardFooterProps;
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
      color: colors.neutral[900],
      fontWeight: 'semi-bold',
    },
    body: {
      width: 'fill-parent',
      padding: { top: 0, bottom: 20, horizontal: 20 },
      fontSize: 14,
      color: colors.neutral[500],
    },
    footer: {
      width: 'fill-parent',
      padding: { top: 0, bottom: 20, horizontal: 20 },
    },
  };
};

import { colors } from '../styles';
import { AccordionAnatomy } from './interface';

export const getAccordionStyles = (): AccordionAnatomy => {
  return {
    container: {
      direction: 'vertical',
      padding: 4,
      spacing: 4,
      stroke: colors.neutral[200],
      cornerRadius: 6,
    },
    item: {
      direction: 'vertical',
      width: 'fill-parent',
      spacing: 4,
      fill: colors.white,
      cornerRadius: 3,
    },
    button: {
      width: 'fill-parent',
      hoverStyle: { fill: colors.neutral[100] },
      cornerRadius: 2,
      padding: { left: 8, vertical: 4 },
      verticalAlignItems: 'center',
    },
    chevronContainer: {
      width: 24,
      height: 24,
      padding: 6,
      cornerRadius: 4,
    },
    chevron: {
      width: 'fill-parent',
      height: 'fill-parent',
      color: colors.neutral[400],
    },
    title: {
      fill: colors.neutral[700],
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: 22,
      width: 'fill-parent',
    },
    content: {
      width: 'fill-parent',
      fontSize: 14,
      lineHeight: 22,
      fill: colors.neutral[500],
    },
    panel: {
      width: 'fill-parent',
      padding: { horizontal: 8, vertical: 4 },
    },
  };
};

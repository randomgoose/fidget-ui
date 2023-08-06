import { colors } from '../styles';
import { DescriptionListAnatomy, DescriptionListProps } from './interface';

export const getDescriptionListStyles = ({
  spacing,
}: Pick<DescriptionListProps, 'spacing'>): DescriptionListAnatomy => {
  return {
    container: {
      spacing,
      overflow: 'visible',
    },
    item: {
      verticalAlignItems: 'center',
      overflow: 'visible',
    },
    label: {
      fill: colors.neutral[500],
      fontSize: 14,
      lineHeight: 22,
    },
    value: {
      fontSize: 14,
      lineHeight: 22,
    },
  };
};

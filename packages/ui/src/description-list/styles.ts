import { colors } from '../styles';
import { DescriptionListProps } from './interface';

export const getDescriptionListStyles = ({
  spacing,
}: Pick<DescriptionListProps, 'spacing'>): {
  container: AutoLayoutProps;
  item: AutoLayoutProps;
  label: TextProps;
  value: TextProps;
} => {
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

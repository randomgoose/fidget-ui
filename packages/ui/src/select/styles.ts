import { colors } from '../styles';
import { SelectProps } from './interface';

// TODO @cc style for disable
// disabled,
export const getSelectStyles = ({
  size,
  variant,
}: Pick<SelectProps, 'size' | 'variant' | 'disabled'>): {
  field: AutoLayoutProps;
  list: AutoLayoutProps;
} => {
  let height: number;
  let stroke: AutoLayoutProps['stroke'];
  let cornerRadius: AutoLayoutProps['cornerRadius'];

  switch (size) {
    default:
      height = 32;
      cornerRadius = 6;
  }

  switch (variant) {
    default:
      stroke = colors.neutral[300];
  }

  return {
    field: {
      height,
      stroke,
      cornerRadius,
    },
    list: {},
  };
};

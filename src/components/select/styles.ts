import { colors } from '../styles';
import { SelectProps } from './interface';

export const getSelectStyles = ({
  size,
  variant,
  disabled,
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

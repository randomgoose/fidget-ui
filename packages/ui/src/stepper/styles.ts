import { IconButtonProps } from '../button/interface';
import { colors } from '../styles';
import { StepperProps } from './interface';

export const getStepperStyles = ({
  size,
}: {
  size: StepperProps['size'];
}): {
  field: Omit<InputProps, 'value' | 'onTextEditEnd'>;
  incrementButton: IconButtonProps;
  decrementButton: IconButtonProps;
} => {
  let height: InputProps['height'];

  switch (size) {
    case 'sm':
      height = 28;
      break;
    case 'lg':
      height = 40;
      break;
    default:
      height = 32;
      break;
  }

  return {
    field: {
      width: 'fill-parent',
      height,
      horizontalAlignText: 'center',
      verticalAlignText: 'center',
      inputBehavior: 'truncate',
      inputFrameProps: {
        stroke: colors.neutral[200],
        padding: { horizontal: 8 },
      },
    },
    incrementButton: {
      stroke: colors.neutral[200],
      cornerRadius: {
        bottomRight: 6,
        topRight: 6,
      },
      variant: 'outline',
      size,
    },
    decrementButton: {
      stroke: colors.neutral[200],
      cornerRadius: {
        bottomLeft: 6,
        topLeft: 6,
      },
      variant: 'outline',
      size,
    },
  };
};

import { colors } from '../styles';
import { RadioAnatomy } from './interface';

export const getRadioStyles = ({
  checked,
  disabled,
}: {
  checked: boolean;
  disabled: boolean;
}): RadioAnatomy => {
  let fill: AutoLayoutProps['fill'];
  let stroke: AutoLayoutProps['stroke'];
  let opacity: AutoLayoutProps['opacity'] = 1;

  if (checked) {
    fill = colors.blue[500];
  } else {
    stroke = colors.neutral[300];
  }

  if (disabled) {
    opacity = 0.3;
  }

  return {
    control: {
      width: 16,
      height: 16,
      fill,
      stroke,
      cornerRadius: 100,
      verticalAlignItems: 'center',
      horizontalAlignItems: 'center',
    },
    container: {
      spacing: 4,
      verticalAlignItems: 'center',
      opacity,
    },
    label: {
      fontSize: 14,
      lineHeight: 22,
      fill: colors.neutral[900],
    },
    ink: {
      width: 6,
      height: 6,
      cornerRadius: 100,
      fill: colors.white,
    },
  };
};

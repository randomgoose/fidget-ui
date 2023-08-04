import { colors, isNeutralColor } from '../styles';
import { CheckboxProps, CheckboxStyle } from './interface';

export const getCheckboxStyles = ({
  checked,
  disabled,
  colorScheme = 'neutral',
}: Pick<CheckboxProps, 'checked' | 'disabled' | 'colorScheme'>): CheckboxStyle => {
  let fill: AutoLayoutProps['fill'];

  if (colorScheme) {
    if (isNeutralColor(colorScheme)) {
      fill = colors[colorScheme][900];
    } else {
      fill = colors[colorScheme][500];
    }
  }

  return {
    control: {
      fill: checked ? fill : colors.white,
      stroke: checked ? undefined : colors.neutral[300],
      width: 16,
      height: 16,
      cornerRadius: 4,
      verticalAlignItems: 'center',
      horizontalAlignItems: 'center',
    },
    container: {
      spacing: 4,
      verticalAlignItems: 'center',
      opacity: disabled ? 0.3 : 1,
    },
    label: {
      fontSize: 14,
      lineHeight: 22,
      fill: colors.neutral[700],
    },
    ink: {
      width: 10,
      height: 10,
      color: colors.white,
    },
  };
};

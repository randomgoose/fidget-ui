import { colors, isNeutralColor } from '../styles';
import { SwitchProps, SwitchStyle } from './interface';

export const getSwitchStyles = ({
  checked,
  colorScheme,
  disabled,
  size,
}: Pick<SwitchProps, 'checked' | 'colorScheme' | 'disabled' | 'size'>): SwitchStyle => {
  /* ---- Container ---- */
  let width: AutoLayoutProps['width'] = 44;
  let height: AutoLayoutProps['height'] = 24;

  /* ---- Track ---- */
  let fill: AutoLayoutProps['fill'];

  /* ---- Thumb ---- */
  let thumbSize: RectangleProps['width'];

  switch (size) {
    case 'sm':
      width = 26;
      height = 16;
      thumbSize = 12;
      break;
    case 'lg':
      width = 50;
      height = 28;
      thumbSize = 24;
      break;
    default:
      width = 34;
      height = 20;
      thumbSize = 16;
      break;
  }

  switch (checked) {
    case true:
      if (colorScheme) {
        if (isNeutralColor(colorScheme)) {
          fill = colors[colorScheme][900];
        } else {
          fill = colors[colorScheme][500];
        }
      } else {
        fill = colors['blue'][500];
      }
      break;
    case false:
      fill = colors.neutral[200];
      break;
    default:
      fill = colors.neutral[200];
      break;
  }

  return {
    container: {
      width,
      height,
      cornerRadius: 100,
      verticalAlignItems: 'center',
      horizontalAlignItems: checked ? 'end' : 'start',
      padding: 2,
      opacity: disabled ? 0.4 : 1,
      fill,
    },
    thumb: {
      width: thumbSize,
      height: thumbSize,
      cornerRadius: 100,
      fill: colors.white,
    },
  };
};

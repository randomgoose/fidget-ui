import { colors, isNeutralColor } from '../../styles';
import { ButtonProps, IconButtonProps } from './interface';

export const getButtonStyles = ({
  variant,
  colorScheme = 'neutral',
  size,
  disabled,
  block,
}: Pick<ButtonProps, 'colorScheme' | 'size' | 'variant' | 'disabled' | 'block'>): {
  container: AutoLayoutProps;
  text: TextProps;
  icon: Omit<SVGProps, 'src'>;
} => {
  const hue = colors[colorScheme];

  let bg: AutoLayoutProps['fill'];
  let stroke: AutoLayoutProps['stroke'];
  let hoverStyle: AutoLayoutProps['hoverStyle'];
  let padding: AutoLayoutProps['padding'];
  let fontSize: TextProps['fontSize'];
  let color: TextProps['fill'];
  let lineHeight: TextProps['lineHeight'];

  switch (variant) {
    case 'filled':
      if (isNeutralColor(colorScheme)) {
        bg = hue[900];
        hoverStyle = { fill: hue[800] };
      } else {
        bg = hue[500];
        hoverStyle = { fill: hue[600] };
      }
      color = colors.white;
      break;
    case 'outline':
      if (isNeutralColor(colorScheme)) {
        stroke = hue[900];
        color = hue[900];
        hoverStyle = { fill: hue[100] };
      } else {
        stroke = hue[500];
        color = hue[500];
        hoverStyle = { fill: hue[50] };
      }
      break;
    case 'ghost':
      if (isNeutralColor(colorScheme)) {
        color = hue[900];
        hoverStyle = {
          fill: hue[100],
        };
      } else {
        color = hue[500];
        hoverStyle = {
          fill: hue[50],
        };
      }
      break;
    default:
      color = hue[700];
      break;
  }

  switch (size) {
    case 'lg':
      padding = { vertical: 8, horizontal: 16 };
      fontSize = 16;
      lineHeight = 24;
      break;
    case 'md':
      padding = { vertical: 5, horizontal: 12 };
      fontSize = 14;
      lineHeight = 22;
      break;
    case 'sm':
      padding = { vertical: 4, horizontal: 12 };
      fontSize = 12;
      lineHeight = 20;
      break;
    default:
      padding = { vertical: 5, horizontal: 12 };
      fontSize = 14;
      lineHeight = 22;
      break;
  }

  return {
    container: {
      fill: bg,
      stroke,
      hoverStyle,
      padding,
      opacity: disabled ? 0.3 : 1,
      verticalAlignItems: 'center',
      horizontalAlignItems: 'center',
      spacing: 4,
      width: block ? 'fill-parent' : 'hug-contents',
      cornerRadius: 6,
    },
    text: {
      fill: color,
      fontSize,
      lineHeight,
    },
    icon: {
      width: fontSize,
      height: fontSize,
      fill: color,
      stroke: color,
    },
  };
};

export const getIconButtonStyles = ({
  size,
  variant,
  colorScheme = 'neutral',
  disabled,
  fontSize,
}: Pick<IconButtonProps, 'size' | 'variant' | 'colorScheme' | 'disabled' | 'fontSize'>): {
  container: AutoLayoutProps;
  icon: Omit<SVGProps, 'src'>;
} => {
  const styles = getButtonStyles({ variant, size, colorScheme, disabled });
  let height: AutoLayoutProps['height'];
  let width: AutoLayoutProps['width'];
  let color: AutoLayoutProps['fill'];

  switch (size) {
    case 'md':
      width = height = 32;
      break;
    case 'lg':
      width = height = 40;
      break;
    case 'sm':
      width = height = 28;
      break;
    default:
      width = height = 32;
      break;
  }

  return {
    container: {
      ...styles.container,
      verticalAlignItems: 'center',
      horizontalAlignItems: 'center',
      cornerRadius: 6,
      width,
      height,
    },
    icon: {
      ...styles.icon,
      width: fontSize ? fontSize : styles.icon.width,
      height: fontSize ? fontSize : styles.icon.height,
      fill: color,
    },
  };
};

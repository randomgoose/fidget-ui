import { renderIcon } from '../utils';
import { IconButtonProps } from './interface';
import { getIconButtonStyles } from './styles';

const { widget } = figma;
const { AutoLayout } = widget;

export function IconButton({
  icon,
  variant = 'filled',
  size,
  colorScheme,
  disabled,
  fontSize,
  ...rest
}: IconButtonProps) {
  const { container: containerStyle, icon: iconStyle } = getIconButtonStyles({
    variant,
    size,
    colorScheme,
    disabled,
    fontSize,
  });

  return (
    <AutoLayout
      {...containerStyle}
      {...rest}
      onClick={!disabled ? rest.onClick : undefined}
      name="Icon Button"
    >
      {icon
        ? renderIcon({
            svg: icon as any,
            options: {
              width: iconStyle.width,
              height: iconStyle.height,
              stroke: iconStyle.stroke,
              fill: iconStyle.fill,
            },
          })
        : null}
    </AutoLayout>
  );
}

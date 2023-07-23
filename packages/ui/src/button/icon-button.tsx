import { merge } from 'lodash-es';
import { renderIcon } from '../utils';
import { IconButtonProps } from './interface';
import { getIconButtonStyles } from './styles';
import { useFetchGlobalConfig } from '../config-provider';

const { widget } = figma;
const { AutoLayout } = widget;

export function IconButton({
  style,
  icon,
  variant = 'filled',
  size,
  colorScheme,
  disabled,
  fontSize,
  ...rest
}: IconButtonProps) {
  const globalConfig = useFetchGlobalConfig();
  const { container: containerStyle, icon: iconStyle } = merge(
    getIconButtonStyles({
      variant,
      size,
      colorScheme,
      disabled,
      fontSize,
    }),
    globalConfig.Button?.style,
    style
  );

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

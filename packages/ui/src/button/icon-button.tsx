import { renderIcon } from '../utils';
import { IconButtonProps } from './interface';
import { getIconButtonStyles } from './styles';
import { useFetchGlobalConfig } from '../config-provider';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';

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
  const { container: containerStyle, icon: iconStyle } = mergeUserDefinedStyles({
    defaultStyle: getIconButtonStyles({
      variant,
      size,
      colorScheme,
      disabled,
      fontSize,
    }),
    globalStyle: globalConfig.Button?.style,
    propStyle: style,
    size,
    variant,
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

import { renderIcon } from '../utils';
import { ButtonProps } from './interface';
import { getButtonStyles } from './styles';
import { useFetchGlobalConfig } from '../config-provider';
import { mergeUserDefinedStyle } from '../utils/mergeUserDefinedStyle';

const { widget } = figma;
const { AutoLayout, Text } = widget;

const NODE_NAME_MAP = {
  button: 'Button',
  buttonText: 'Button Text',
};

export function Button({
  style,
  variant = 'filled',
  children,
  disabled = false,
  size = 'md',
  colorScheme,
  onClick,
  leftIcon,
  rightIcon,
  block,
  ...rest
}: ButtonProps) {
  if (variant !== 'filled') {
    // TODO
  }

  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyle({
    defaultStyle: getButtonStyles({
      variant,
      size,
      colorScheme,
      disabled,
      block,
    }),
    globalStyle: globalConfig.Button?.style,
    propStyle: style,
    size,
    variant,
  });

  const [nodeIconLeft, nodeIconRight] = [leftIcon, rightIcon].map((icon) =>
    icon
      ? renderIcon({
          svg: icon as any,
          options: {
            stroke: styles.icon.stroke,
            width: styles.icon.width,
            height: styles.icon.height,
          },
        })
      : null
  );

  return (
    <AutoLayout
      name={NODE_NAME_MAP.button}
      {...styles.container}
      {...rest}
      onClick={!disabled ? onClick : undefined}
    >
      {nodeIconLeft}

      {/*TODO: don't understand*/}
      {Array.isArray(leftIcon) ? leftIcon.map((item) => item) : null}

      <Text name={NODE_NAME_MAP.buttonText} {...styles.text}>
        {children}
      </Text>

      {nodeIconRight}
    </AutoLayout>
  );
}

import { TagProps } from './interface';
import { getTagStyles } from './styles';
import { IconXMark } from '../icons';
import { isSvg, renderChildren, renderIcon } from '../utils';
import { useFetchGlobalConfig } from '../config-provider';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';

const { AutoLayout } = figma.widget;

const NODE_NAM_MAP = {
  tag: 'Tag',
};

export function Tag({
  style,
  children,
  variant,
  colorScheme = 'blue',
  size = 'md',
  dismissible,
  onClose,
  leftIcon,
  rightIcon,
  ...rest
}: TagProps) {
  const globalConfig = useFetchGlobalConfig();

  const styles = mergeUserDefinedStyles({
    defaultStyle: getTagStyles({ variant, colorScheme, size }),
    globalStyle: globalConfig.Tag?.style,
    propStyle: style,
    variant,
    size,
  });

  const leftIconNode = isSvg(leftIcon)
    ? renderIcon({
        svg: leftIcon as any,
        options: { ...styles.icon },
      })
    : null;
  const rightIconNode = isSvg(rightIcon)
    ? renderIcon({
        svg: rightIcon as any,
        options: { ...styles.icon },
      })
    : null;

  return (
    <AutoLayout {...styles.container} {...rest} name={NODE_NAM_MAP.tag}>
      {leftIconNode}
      {renderChildren(children, { textProps: styles.label })}
      {rightIconNode}
      {dismissible ? (
        <IconXMark {...styles.closeButton} width={12} height={12} onClick={() => onClose?.()} />
      ) : null}
    </AutoLayout>
  );
}

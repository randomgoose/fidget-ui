import { TagProps } from './interface';
import { getTagStyles } from './styles';
import { IconXMark } from '../icons';
import { isSvg, renderChildren, renderIcon } from '../utils';

const { widget } = figma;
const { AutoLayout } = widget;

const NODE_NAM_MAP = {
  tag: 'Tag',
};

export function Tag({
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
  const styles = getTagStyles({ variant, colorScheme, size });

  const renderIconOptions = {
    width: styles.icon.width,
    height: styles.icon.height,
    stroke: styles.icon.stroke,
    fill: styles.icon.fill,
  };
  const leftIconNode = isSvg(leftIcon)
    ? renderIcon({
        svg: leftIcon as any,
        options: renderIconOptions,
      })
    : null;
  const rightIconNode = isSvg(rightIcon)
    ? renderIcon({
        svg: rightIcon as any,
        options: renderIconOptions,
      })
    : null;

  return (
    <AutoLayout name={NODE_NAM_MAP.tag} {...styles.container} {...rest}>
      {leftIconNode}

      {renderChildren(children, { textProps: styles.label })}

      {rightIconNode}

      {dismissible ? (
        <IconXMark {...styles.closeButton} width={12} height={12} onClick={() => onClose?.()} />
      ) : null}
    </AutoLayout>
  );
}

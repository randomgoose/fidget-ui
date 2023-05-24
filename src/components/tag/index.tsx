import { TagProps } from './interface';
import { getTagStyles } from './styles';
import { IconXMark } from '../../icons';
import { isSvg, renderChildren, renderIcon } from '../utils';

const { widget } = figma;
const { AutoLayout } = widget;

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
  const { container, label, closeButton, icon } = getTagStyles({ variant, colorScheme, size });

  const leftIconNode = isSvg(leftIcon)
    ? renderIcon({
        svg: leftIcon as any,
        options: { width: icon.width, height: icon.height, stroke: icon.stroke, fill: icon.fill },
      })
    : null;
  const rightIconNode = isSvg(rightIcon)
    ? renderIcon({
        svg: rightIcon as any,
        options: { width: icon.width, height: icon.height, stroke: icon.stroke, fill: icon.fill },
      })
    : null;

  return (
    <AutoLayout name="Tag" {...container} {...rest}>
      {leftIconNode}

      {renderChildren(children, { textProps: label })}

      {rightIconNode}

      {dismissible ? (
        <IconXMark {...closeButton} width={12} height={12} onClick={() => onClose && onClose()} />
      ) : null}
    </AutoLayout>
  );
}

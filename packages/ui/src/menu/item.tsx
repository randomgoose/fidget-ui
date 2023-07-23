import { colors } from '../styles';
import { renderIcon, renderChildren } from '../utils';
import { MenuItemProps } from './interface';
import { getMenuStyles } from './styles';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout } = figma.widget;

export function MenuItem(props: MenuItemProps) {
  const { icon, disabled, label, color, children, onClick, ...rest } = props;
  const styles = getMenuStyles({ disabled });

  const iconNode = icon
    ? renderIcon({
        svg: icon as any,
        options: {
          ...styles.icon,
          fill: color,
          stroke: color,
        },
      })
    : null;

  return (
    <AutoLayout {...styles.item} {...rest} name={NODE_NAME_MAP.item} onClick={onClick}>
      {iconNode}
      {renderChildren(children, {
        textProps: { ...styles.text, fill: color || colors.neutral[700] },
      })}
      {renderChildren(label, { textProps: { ...styles.text, fill: color || colors.neutral[900] } })}
    </AutoLayout>
  );
}

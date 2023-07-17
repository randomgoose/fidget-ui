import { colors } from '../styles';
import { renderIcon, renderChildren } from '../utils';
import { MenuItemProps } from './interface';
import { getMenuStyles } from './styles';

const { AutoLayout } = figma.widget;

export function MenuItem(props: MenuItemProps) {
  const { icon, disabled, label, color, children, ...rest } = props;
  const { text, item, icon: iconStyles } = getMenuStyles({ disabled });

  const iconNode = icon
    ? renderIcon({
        svg: icon as any,
        options: {
          ...iconStyles,
          fill: color,
          stroke: color,
        },
      })
    : null;

  const onClick = (e: WidgetClickEvent) => {
    props.onClick && props.onClick(e);
  };

  return (
    <AutoLayout {...item} {...rest} name="Menu Item" onClick={onClick}>
      {iconNode}
      {renderChildren(children, { textProps: { ...text, fill: color || colors.neutral[700] } })}
      {renderChildren(label, { textProps: { ...text, fill: color || colors.neutral[900] } })}
    </AutoLayout>
  );
}

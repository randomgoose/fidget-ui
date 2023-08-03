import { renderIcon, renderChildren, splitProps } from '../utils';
import { MenuItemProps } from './interface';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout } = figma.widget;

export function MenuItem(props: MenuItemProps) {
  const { icon, children, onClick = () => {} } = props;

  const { autolayoutProps, textProps } = splitProps(props);
  console.log(children, textProps.fill, props.key);

  const iconNode = icon
    ? renderIcon({
        svg: icon as any,
        options: {
          // ...styles.icon,
          fill: props.color,
          stroke: props.color,
        },
      })
    : null;

  return (
    <AutoLayout {...autolayoutProps} name={NODE_NAME_MAP.item} onClick={onClick}>
      {iconNode}
      {renderChildren(children, { textProps })}
    </AutoLayout>
  );
}

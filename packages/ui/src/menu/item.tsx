import { renderIcon, renderChildren, splitProps } from '../utils';
import { MenuItemProps } from './interface';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout, Fragment } = figma.widget;

export function MenuItem(props: MenuItemProps) {
  const { icon, children, onClick = () => {} } = props;
  const { autoLayoutProps, textProps } = splitProps(props);

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

  const rootProps = {
    name: NODE_NAME_MAP.item,
    ...props,
  };

  return (
    <Fragment {...rootProps}>
      <AutoLayout {...autoLayoutProps} onClick={onClick}>
        {iconNode}
        {renderChildren(children, { textProps })}
      </AutoLayout>
    </Fragment>
  );
}

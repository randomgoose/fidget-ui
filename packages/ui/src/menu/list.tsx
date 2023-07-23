import { MenuItem } from './item';
import { MenuListProps } from './interface';
import { MenuDivider } from './divider';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout, h } = figma.widget;

export function MenuList(props: MenuListProps) {
  const { children, ...rest } = props;

  return (
    <AutoLayout {...rest} name={NODE_NAME_MAP.list}>
      {(() => {
        if (Array.isArray(children)) {
          return children
            .filter((child: any) => child.props?.name !== NODE_NAME_MAP.trigger)
            .map((child: any, index) => {
              switch (child.props?.name) {
                case NODE_NAME_MAP.divider:
                  return h(MenuDivider, { ...child.props, key: index });
                case NODE_NAME_MAP.item:
                  return (
                    <MenuItem
                      key={child.props?.key || index}
                      onClick={(e: WidgetClickEvent) => {
                        // Pass the setter of Menu isOpen state to MenuItems.
                        props.onClick?.(e);
                        child.props?.onClick(e);
                      }}
                      {...child.props}
                    >
                      {child.children}
                    </MenuItem>
                  );
                default:
                  return child;
              }
            });
        } else {
          return children;
        }
      })()}
    </AutoLayout>
  );
}

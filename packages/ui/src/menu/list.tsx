import { MenuItem } from './item';
import { MenuListProps } from './interface';
import { MenuDivider } from './divider';

const { AutoLayout, h } = figma.widget;

export function MenuList(props: MenuListProps) {
  const { children, ...rest } = props;

  return (
    <AutoLayout {...rest} name="Menu List">
      {(() => {
        if (Array.isArray(children)) {
          return children
            .filter((child: any) => child.props?.name !== 'Menu Trigger')
            .map((child: any, index) => {
              switch (child.props?.name) {
                case 'Menu Divider':
                  return h(MenuDivider, { ...child.props, key: index });
                case 'Menu Item':
                  return h(MenuItem, {
                    onClick: (e: WidgetClickEvent) => {
                      child.props?.onClick(e);
                    },
                    children: child.children,
                    key: index,
                  });
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

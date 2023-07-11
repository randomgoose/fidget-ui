import { MenuProps } from './interface';
import { getMenuStyles } from './styles';
import { MenuTrigger } from './trigger';
import { MenuList } from './list';

const { widget } = figma;
const { AutoLayout, useSyncedState, h, Line, Fragment } = widget;

const NODE_NAME_MAP = {
  container: 'Menu',
  locator: 'Menu Locator',
  item: 'Menu Item',
  divider: 'Menu Divider',
  trigger: 'Menu Trigger',
  list: 'Menu List',
};

export function Menu(props: MenuProps) {
  //TODO: Find a proper way to generate unique ID
  const [isOpen, setIsOpen] = useSyncedState(`open/${props.id}`, false);

  const { placement, children } = props;
  const { list, container } = getMenuStyles({ placement });

  const renderMenuChildren = () => {
    if (Array.isArray(children)) {
      return children.map((child: any, index) => {
        switch (child.props.name) {
          case NODE_NAME_MAP.trigger:
            return h(MenuTrigger, {
              ...child.props,
              key: index,
              children: child.children,
              onClick: (e: WidgetClickEvent) => {
                child.props.onClick && child.props.onClick(e);
                setIsOpen((prev) => !prev);
              },
            });
          case NODE_NAME_MAP.list:
            return (
              <AutoLayout name="Menu List Locator" overflow="scroll">
                <Line opacity={0} />
                {isOpen ? (
                  <MenuList {...child.props} {...list}>
                    {child.children}
                  </MenuList>
                ) : null}
              </AutoLayout>
            );
          default:
            return <Fragment key={index} />;
        }
      });
    } else {
      return children;
    }
  };

  // const menuItems = items?.map((item, index) => {
  //   if ('type' in item) {
  //     if (item.type === 'divider') {
  //       return <Divider {...item} key={index} />;
  //     } else {
  //       return (
  //         <MenuItem
  //           {...item}
  //           id={`${props.id}/${index}`}
  //           onClick={(e) => {
  //             item.onClick && item.onClick(e);
  //             setIsOpen(false);
  //           }}
  //           key={index}
  //         />
  //       );
  //     }
  //   } else {
  //     if ('label' in item) {
  //       return (
  //         <MenuItem
  //           {...item}
  //           id={`${props.id}/${index}`}
  //           onClick={(e) => {
  //             item.onClick && item.onClick(e);
  //             setIsOpen(false);
  //           }}
  //           key={index}
  //         />
  //       );
  //     }
  //   }
  // });

  // const listNode = (
  //   <AutoLayout {...list} name="Menu Item List" width={240} overflow="visible">
  //     {(() => {
  //       if (Array.isArray(children)) {
  //         return children
  //           .filter((child: any) => child.props?.name !== NODE_NAME_MAP.trigger)
  //           .map((child: any, index) => {
  //             switch (child.props?.name) {
  //               case NODE_NAME_MAP.divider:
  //                 return h(MenuDivider, { ...child.props });
  //               case NODE_NAME_MAP.item:
  //                 return h(MenuItem, {
  //                   onClick: (e: WidgetClickEvent) => {
  //                     child.props?.onClick(e);
  //                     setIsOpen(false);
  //                   },
  //                   children: child.children,
  //                   key: index,
  //                 });
  //               default:
  //                 return child;
  //             }
  //           });
  //       } else {
  //         return children;
  //       }
  //     })()}
  //     {/* {renderChildren(children)} */}
  //     {menuItems}
  //   </AutoLayout>
  // );

  return (
    <AutoLayout
      {...container}
      spacing={4}
      name={NODE_NAME_MAP.container}
      overflow="visible"
      direction="vertical"
    >
      {renderMenuChildren()}
    </AutoLayout>
  );
}

import { MenuProps } from './interface';
import { getMenuStyles } from './styles';
import { MenuTrigger } from './trigger';
import { MenuList } from './list';
import { getSyncedKeys } from '../utils';

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
  const [syncedKeyOpen] = getSyncedKeys('Menu', props.id, ['open']);
  const [isOpen, setIsOpen] = useSyncedState(syncedKeyOpen, false);

  const { placement = 'bottom-start', children } = props;
  const { list, container } = getMenuStyles({ placement });

  const order = placement.startsWith('top')
    ? [NODE_NAME_MAP.list, NODE_NAME_MAP.trigger]
    : [NODE_NAME_MAP.trigger, NODE_NAME_MAP.list];

  const renderMenuChildren = () => {
    if (Array.isArray(children)) {
      return children
        .sort((a: any, b: any) => order.indexOf(a.props.name) - order.indexOf(b.props.name))
        .map((child: any, index) => {
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
                <AutoLayout width={1} name="Menu List Locator" overflow="scroll">
                  <Line opacity={0} />
                  {isOpen ? (
                    <MenuList
                      {...list}
                      {...child.props}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
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

  return (
    <AutoLayout
      {...container}
      name={NODE_NAME_MAP.container}
      overflow="visible"
      direction="vertical"
    >
      {renderMenuChildren()}
    </AutoLayout>
  );
}

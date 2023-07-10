import { Button } from '../button';
import { MenuProps } from './interface';
import { getMenuStyles } from './styles';
import { Divider } from '../divider';
import { MenuItem } from './item';
import { getSyncedKeys } from '../utils';
// import { MenuDivider } from './divider';

const { widget } = figma;
const { AutoLayout, useSyncedState, h, Line } = widget;

export function Menu(props: MenuProps) {
  const [syncedKeyOpen] = getSyncedKeys('Menu', props.id, ['open']);
  const [isOpen, setIsOpen] = useSyncedState(syncedKeyOpen, false);
const NODE_NAME_MAP = {
  container: 'Menu',
  locator: 'Menu Locator',
  item: 'Menu Item',
  divider: 'Menu Divider',
  trigger: 'Menu Trigger'
};

function Menu(props: MenuProps) {
  //TODO: Find a proper way to generate unique ID
  const [isOpen, setIsOpen] = useSyncedState(`open/${props.id}`, false);

  const { placement, items, children } = props;
  const { list, container } = getMenuStyles({ placement });

  const renderTrigger = () => {
    if (props.trigger) {
      return h(props.trigger, { onClick: () => setIsOpen((prev) => !prev) });
    } else {
      return (
        <Button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          Trigger
        </Button>
      );
    }
  };

  const menuItems = items?.map((item, index) => {
    if ('type' in item) {
      if (item.type === 'divider') {
        return <Divider {...item} key={index} />;
      } else {
        return (
          <MenuItem
            {...item}
            id={`${props.id}/${index}`}
            onClick={(e) => {
              item.onClick && item.onClick(e);
              setIsOpen(false);
            }}
            key={index}
          />
        );
      }
    } else {
      if ('label' in item) {
        return (
          <MenuItem
            {...item}
            id={`${props.id}/${index}`}
            onClick={(e) => {
              item.onClick && item.onClick(e);
              setIsOpen(false);
            }}
            key={index}
          />
        );
      }
    }
  });

  const listNode = (
    <AutoLayout {...list} name="Menu Item List" width={240} overflow="visible">
      {(() => {
        if (Array.isArray(children)) {
          return children.map((child: any, index) => {
            switch (child.props.name) {
              case NODE_NAME_MAP.trigger:
                return child
              case NODE_NAME_MAP.divider:
                return h(MenuDivider, { ...child.props })
              case NODE_NAME_MAP.item:
                return h(MenuItem, {
                  onClick: (e: WidgetClickEvent) => { child.props.onClick(e); setIsOpen(false) },
                  children: child.children,
                  key: index
                })
              default:
                return child
            }
          })
        } else { return children }
      })()}
      {/* {renderChildren(children)} */}
      {menuItems}
    </AutoLayout>
  );

  return (
    <AutoLayout
      {...container}
      spacing={4}
      name={NODE_NAME_MAP.container}
      overflow="visible"
      direction="vertical"
    >
      {renderTrigger()}
      <AutoLayout name="Menu List Locator" overflow="scroll">
        <Line opacity={0} />
        {isOpen ? listNode : null}
      </AutoLayout>
    </AutoLayout>
  );
}

export { Menu, MenuItem, MenuDivider }

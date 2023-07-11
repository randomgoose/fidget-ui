import { Button } from '../button';
import { MenuProps } from './interface';
import { getMenuStyles } from './styles';
import { Divider } from '../divider';
import { MenuItem } from './item';
import { getSyncedKeys } from '../utils';

const { widget } = figma;
const { AutoLayout, useSyncedState, h } = widget;

export function Menu(props: MenuProps) {
  const [syncedKeyOpen] = getSyncedKeys('Menu', props.id, ['open']);
  const [isOpen, setIsOpen] = useSyncedState(syncedKeyOpen, false);

  const { placement, items } = props;
  const { list, positioner } = getMenuStyles({ placement });

  const renderTrigger = () => {
    if (props.trigger) {
      return h(props.trigger, { onClick: () => setIsOpen((prev) => !prev) });
    } else {
      return <Button>Trigger</Button>;
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

  return (
    <AutoLayout name="Menu" overflow="visible" direction="vertical">
      {renderTrigger()}
      <AutoLayout name="Menu List Positioner" overflow="scroll" {...positioner}>
        {isOpen ? (
          <AutoLayout {...list} name="Menu Item List" width={240} overflow="visible">
            {menuItems}
          </AutoLayout>
        ) : null}
      </AutoLayout>
    </AutoLayout>
  );
}

export function MenuTrigger() {}

import { IconFilmSolid } from '../../icons';
import { Button } from '../button';
import { MenuDividerProps, MenuItemProps, MenuProps } from './interface';
import { getMenuStyles } from './styles';
import { Divider } from '../divider';
import { MenuItem } from './item';
import { colors } from '../../styles';

const { widget } = figma;
const { AutoLayout, useSyncedState, h } = widget;

// eslint-disable-next-line
const items: (MenuDividerProps | MenuItemProps)[] = [
  {
    label: 'Create',
    command: '⌘N',
    onClick: () => {
      figma.notify('hi');
    },
  },
  { label: 'Open Stream URL...' },
  { label: 'Close Window' },
  { label: 'Library' },
  { label: 'Import...', icon: <IconFilmSolid /> },
  { label: 'Bury Playlist to disc', disabled: true },
  { type: 'divider', margin: 4 },
  { label: 'Delete', color: colors.red[500] },
];

export function Menu(props: MenuProps) {
  const [isOpen, setIsOpen] = useSyncedState(`open/${props.id}`, false);

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
      <AutoLayout name="Menu List Positioner" overflow={'scroll'} {...positioner}>
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

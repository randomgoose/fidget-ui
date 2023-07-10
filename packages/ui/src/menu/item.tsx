import { IconChevronRight } from '../icons';
import { colors } from '../styles';
import { renderIcon, renderChildren, getSyncedKeys } from '../utils';
import { MenuItemProps } from './interface';
import { getMenuStyles } from './styles';

const { useSyncedState, AutoLayout } = figma.widget;

export function MenuItem(props: MenuItemProps) {
  const { icon, command, disabled, label, items, color, children, ...rest } = props;
  const {
    text,
    command: commandStyles,
    item,
    list,
    icon: iconStyles,
    chevron,
  } = getMenuStyles({ disabled });
  // TODO 第二个参数应该为 MenuID + MenuItemId
  const [syncedKeyOpen] = getSyncedKeys('Menu', props.id, [`item/open`]);
  const [isOpen, setIsOpen] = useSyncedState(syncedKeyOpen, false);

  const iconNode = icon ? renderIcon({ svg: icon as any, options: iconStyles }) : null;
  const commandNode = command ? renderChildren(command, { textProps: commandStyles }) : null;

  const onClick = (e: WidgetClickEvent) => {
    props.onClick && props.onClick(e);
    setIsOpen((prev) => !prev);
  };

  return (
    <AutoLayout {...rest} {...item} name="Menu Item" onClick={onClick}>
      {iconNode}
      {renderChildren(children, { textProps: { ...text, fill: color || colors.neutral[700] } })}
      {renderChildren(label, { textProps: { ...text, fill: color || colors.neutral[900] } })}
      {commandNode}
      {items && items.length > 0 ? (
        <>
          <IconChevronRight {...chevron} />
          {isOpen ? (
            <AutoLayout
              name="Sub Menu Positioner"
              width={1}
              height={1}
              positioning="absolute"
              x={{ type: 'right', offset: 0 }}
              overflow="visible"
            >
              <AutoLayout
                name="Sub Menu"
                positioning="absolute"
                x={{ type: 'left', offset: 8 }}
                overflow="visible"
                {...list}
              >
                {items.map((item) => (
                  <MenuItem {...item} />
                ))}
              </AutoLayout>
            </AutoLayout>
          ) : null}
        </>
      ) : null}
    </AutoLayout>
  );
}

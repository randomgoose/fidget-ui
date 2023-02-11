import { IconFilmSolid } from "../../icons";
import { renderChildren, renderIcon } from "../../utils";
import { Button } from "../button";
import { MenuDividerProps, MenuItemProps, MenuProps } from "./interface";
import { getMenuStyles } from "./styles";
import _ from "lodash";
import { Divider } from "../divider";

const { widget } = figma;
const { AutoLayout, useSyncedState, h } = widget;

const items: (MenuDividerProps | MenuItemProps)[] = [
  {
    label: "Create a rectangle",
    command: "⌘N",
    onClick: () => {
      figma.notify("hi");
    },
  },
  { label: "Open Stream URL..." },
  { label: "Close Window" },
  { label: "Library" },
  { label: "Import...", icon: <IconFilmSolid /> },
  { label: "Bury Playlist to disc", disabled: true },
  { type: "divider" },
];

export function Menu(props: MenuProps) {
  const [isOpen, setIsOpen] = useSyncedState(`open/${props.id}`, false);
  const { list, item } = getMenuStyles({});

  const renderTrigger = () => {
    if (props.trigger) {
      return h(props.trigger, { onClick: () => setIsOpen((prev) => !prev) });
    } else {
      return <Button>Trigger</Button>;
    }
  };

  const menuItems = items.map((item, index) => {
    if ("type" in item) {
      if (item.type === "divider") {
        return <Divider key={index} />;
      } else {
        return <MenuItem key={index} {...item} />;
      }
    } else {
      if ("label" in item) {
        return <MenuItem key={index} {...item} />;
      }
    }
  });

  return (
    <AutoLayout name="Menu" overflow="visible" direction="vertical">
      {renderTrigger()}
      <AutoLayout name="Menu List Positioner" overflow={"scroll"} height={1}>
        {isOpen ? (
          <AutoLayout {...list} name="Menu Item List" width={240}>
            {menuItems}
          </AutoLayout>
        ) : null}
      </AutoLayout>
    </AutoLayout>
  );
}

export function MenuTrigger() {}

export function MenuItem(props: MenuItemProps) {
  const { children, icon, command, disabled, label, ...rest } = props;
  const { text, command: commandStyles, item } = getMenuStyles({ disabled });

  const iconNode = icon
    ? renderIcon({ svg: icon as any, options: { width: 16, height: 16 } })
    : null;
  const commandNode = command
    ? renderChildren(command, { textProps: commandStyles })
    : null;

  return (
    <AutoLayout
      {...rest}
      {...item}
      name="Menu Item"
      width={"fill-parent"}
    >
      {iconNode}
      {renderChildren(label, { textProps: text })}
      {commandNode}
    </AutoLayout>
  );
}

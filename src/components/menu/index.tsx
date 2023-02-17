import { IconFilmSolid } from "../../icons";
import { Button } from "../button";
import { MenuDividerProps, MenuItemProps, MenuProps } from "./interface";
import { getMenuStyles } from "./styles";
import _ from "lodash";
import { Divider } from "../divider";
import { MenuItem } from "./item";

const { widget } = figma;
const { AutoLayout, useSyncedState, h } = widget;

const items: (MenuDividerProps | MenuItemProps)[] = [
  {
    label: "Create",
    command: "⌘N",
    onClick: () => {
      figma.notify("hi");
    },
    items: [{ label: "Rectangle" }, { label: "Ellipse" }],
  },
  {
    label: "Open Stream URL...",
    items: [{ label: "a", items: [{ label: "b" }] }],
  },
  { label: "Close Window" },
  { label: "Library" },
  { label: "Import...", icon: <IconFilmSolid /> },
  { label: "Bury Playlist to disc", disabled: true },
  { type: "divider" },
];

export function Menu(props: MenuProps) {
  const [isOpen, setIsOpen] = useSyncedState(`open/${props.id}`, false);

  const { placement } = props;
  const { list, positioner } = getMenuStyles({ placement });

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
        return <MenuItem key={index} {...item} id={`${props.id}/${index}`} />;
      }
    } else {
      if ("label" in item) {
        return <MenuItem key={index} {...item} id={`${props.id}/${index}`} />;
      }
    }
  });

  return (
    <AutoLayout name="Menu" overflow="visible" direction="vertical">
      {renderTrigger()}
      <AutoLayout
        name="Menu List Positioner"
        overflow={"scroll"}
        {...positioner}
      >
        {isOpen ? (
          <AutoLayout {...list} name="Menu Item List" width={240} overflow="visible"
          >
            {menuItems}
          </AutoLayout>
        ) : null}
      </AutoLayout>
    </AutoLayout>
  );
}

export function MenuTrigger() { }
import { DividerProps } from "../divider/interface";

export interface MenuProps extends AutoLayoutProps {
  id: string;
  trigger?: FigmaDeclarativeNode;
  children?: FigmaDeclarativeNode;
  items?: (MenuItemProps | MenuDividerProps)[];
  placement?: "bottom" | "top" | "left" | "right";
}

export interface MenuDividerProps extends DividerProps {
  type: "divider";
}

export interface MenuItemProps extends AutoLayoutProps {
  id?: string;
  type?: "item";
  children?: FigmaDeclarativeNode;
  label?: FigmaDeclarativeNode;
  icon?: FigmaDeclarativeNode;
  command?: FigmaDeclarativeNode;
  disabled?: boolean;
  items?: MenuItemProps[];
  /*---- New ----*/
  color?: TextProps['fill'];
}

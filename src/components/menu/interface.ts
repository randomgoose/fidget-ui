export interface MenuProps extends AutoLayoutProps {
  id: string;
  trigger?: FigmaDeclarativeNode;
  children?: FigmaDeclarativeNode;
  items?: FigmaDeclarativeNode;
  placement?: "bottom" | "top" | "left" | "right";
}

export interface MenuDividerProps {
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
}

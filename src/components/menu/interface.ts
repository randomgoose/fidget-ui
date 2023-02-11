export interface MenuProps extends AutoLayoutProps {
    id?: string;
    trigger?: FigmaDeclarativeNode;
    children?: FigmaDeclarativeNode;
    items?: FigmaDeclarativeNode;
}

export interface MenuDividerProps {
    type: "divider"
}

export interface MenuItemProps extends AutoLayoutProps {
    type?: "item";
    children?: FigmaDeclarativeNode;
    label?: FigmaDeclarativeNode;
    icon?: FigmaDeclarativeNode;
    command?: FigmaDeclarativeNode;
    disabled?: boolean;
}
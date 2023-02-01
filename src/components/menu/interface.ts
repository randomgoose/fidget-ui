export interface MenuProps extends AutoLayoutProps {
    id?: string;
    trigger?: FigmaDeclarativeNode;
    children?: FigmaDeclarativeNode;
    items?: FigmaDeclarativeNode;
}

export interface MenuItemProps extends AutoLayoutProps {
    children?: FigmaDeclarativeNode;
    icon?: FigmaDeclarativeNode;
}
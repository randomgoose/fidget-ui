import { DividerProps } from '../divider/interface';
import { ComponentStyle, ElementProps } from '../types';

export interface MenuAnatomy {
  container: AutoLayoutProps;
  list: AutoLayoutProps;
  item: ElementProps;
  icon: Omit<SVGProps, 'src'>;
  chevron: Omit<SVGProps, 'src'> & { color: string };
  locator: AutoLayoutProps;
  trigger: ElementProps;
  divider: AutoLayoutProps;
}

/**
 * @title Menu Item
 */
export interface MenuItemProps extends ElementProps {
  /**
   * @en The style object including all menu item parts.
   */
  style?: ComponentStyle<MenuAnatomy['item']>;
  /**
   * @en The type of the menu item.
   */
  type?: 'item';
  /**
   * @en The content of the menu item.
   */
  children?: FigmaDeclarativeNode;
  /**
   * @deprecated This prop is deprecated. Use 'children' instead.
   */
  label?: FigmaDeclarativeNode;
  /**
   * @en The icon of the menu item.
   */
  icon?: FigmaDeclarativeNode;
  /**
   * @en If 'true', the menu item is disabled.
   */
  disabled?: boolean;
  /**
   * @en The color of the text in the menu item.
   */
  color?: TextProps['stroke'];
  /**
   * 
   * @param e 
   * @en The click event.
   */
  onClick?: (e: WidgetClickEvent) => void;
}

export interface MenuTriggerProps extends ElementProps {
  onClick?: (e: WidgetClickEvent) => void;
}

export interface MenuDividerProps extends DividerProps {
  type: 'divider';
}

export type MenuListProps = AutoLayoutProps;

/**
 * @title Menu
 */
export interface MenuProps extends AutoLayoutProps {
  /**
   * @en A unique identifier ot the Menu.
   */
  id: string;
  // TODO 通过 trigger 和 items 使用的方式似乎还未实现？
  /**
   * @en The style object including all menu parts.
   */
  style?: ComponentStyle<MenuAnatomy>;
  /**
   * @en The custom menu trigger element.
   */
  trigger?: FigmaDeclarativeNode;
  /**
   * @en The custom elements wrapped in the menu.
   */
  children?: FigmaDeclarativeNode;
  /**
   * @en The data objects of menu items.
   */
  items?: (MenuItemProps | MenuDividerProps)[];
  /**
   * @en The placement of the menu list.
   */
  placement?: 'bottom' | 'top' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
}

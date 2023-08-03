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
}

export interface MenuItemProps extends ElementProps {
  style?: ComponentStyle<string, string, MenuAnatomy['item']>;
  type?: 'item';
  children?: FigmaDeclarativeNode;
  /**
   * @deprecated This prop is deprecated. Use 'children' instead.
   */
  label?: FigmaDeclarativeNode;
  icon?: FigmaDeclarativeNode;
  disabled?: boolean;
  items?: MenuItemProps[];
  color?: TextProps['stroke'];
  onClick?: (e: WidgetClickEvent) => void;
}

export interface MenuTriggerProps extends AutoLayoutProps {
  onClick?: (e: WidgetClickEvent) => void;
}

export interface MenuDividerProps extends DividerProps {
  type: 'divider';
}

export type MenuListProps = AutoLayoutProps;

export interface MenuProps extends AutoLayoutProps {
  id: string;
  // TODO 通过 trigger 和 items 使用的方式似乎还未实现？
  style?: ComponentStyle<string, string, MenuAnatomy>;
  trigger?: FigmaDeclarativeNode;
  children?: FigmaDeclarativeNode;
  items?: (MenuItemProps | MenuDividerProps)[];
  placement?: 'bottom' | 'top' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
}

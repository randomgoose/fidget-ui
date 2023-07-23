import { DividerProps } from '../divider/interface';

export interface MenuItemProps extends Omit<AutoLayoutProps, 'children'> {
  type?: 'item';
  children?: FigmaDeclarativeNode;
  /**
   * @deprecated This prop is deprecated. Use 'children' instead.
   */
  label?: FigmaDeclarativeNode;
  icon?: FigmaDeclarativeNode;
  disabled?: boolean;
  items?: MenuItemProps[];
  /*---- New ----*/
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
  trigger?: FigmaDeclarativeNode;
  children?: FigmaDeclarativeNode;
  items?: (MenuItemProps | MenuDividerProps)[];
  placement?: 'bottom' | 'top' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
}

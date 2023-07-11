import { DividerProps } from '../divider/interface';

export interface MenuItemProps extends AutoLayoutProps {
  // TODO 此处应该可以叫 key，同时以它构建的 syncedStatedKey
  id: string;
  type?: 'item';
  children?: FigmaDeclarativeNode;
  /**
   * @deprecated This prop is deprecated. Use 'children' instead.
   */
  label?: FigmaDeclarativeNode;
  icon?: FigmaDeclarativeNode;
  command?: FigmaDeclarativeNode;
  disabled?: boolean;
  items?: MenuItemProps[];
  /*---- New ----*/
  color?: TextProps['fill'];
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
  trigger?: FigmaDeclarativeNode;
  children?: FigmaDeclarativeNode;
  items?: (MenuItemProps | MenuDividerProps)[];
  placement?: 'bottom' | 'top' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
}

import { ComponentStyle } from '../types';

export interface DividerAnatomy {
  container: AutoLayoutProps;
  text: TextProps;
  divider: AutoLayoutProps;
}

/**
 * @title Divider
 */
export interface DividerProps {
  /**
   * @en The style object including all divider parts.
   */
  style?: ComponentStyle<DividerAnatomy>;
  /**
   * @en The orientation of the divider.
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * @en The elements between dividers.
   */
  children?: FigmaDeclarativeNode;
  /**
   * @en The margins around the divider.
   */
  margin?: AutoLayoutProps['padding'];
  /**
   * @en The color of the divider.
   */
  stroke?: RectangleProps['fill'];
}

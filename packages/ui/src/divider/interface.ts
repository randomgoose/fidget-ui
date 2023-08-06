import { ComponentStyle } from '../types';

export interface DividerAnatomy {
  container: AutoLayoutProps;
  text: TextProps;
  divider: AutoLayoutProps;
}

export interface DividerProps {
  style?: ComponentStyle<DividerAnatomy>;
  orientation?: 'vertical' | 'horizontal';
  children?: FigmaDeclarativeNode;
  margin?: AutoLayoutProps['padding'];
  stroke?: RectangleProps['fill'];
}

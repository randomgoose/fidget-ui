import { ComponentStyle } from '../types';

export interface DividerStyle {
  container: AutoLayoutProps;
  text: TextProps;
  divider: AutoLayoutProps;
}

export interface DividerProps {
  style?: ComponentStyle<string, string, DividerStyle>;
  orientation?: 'vertical' | 'horizontal';
  children?: FigmaDeclarativeNode;
  margin?: AutoLayoutProps['padding'];
  stroke?: RectangleProps['fill'];
}

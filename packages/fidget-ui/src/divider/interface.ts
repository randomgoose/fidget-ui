export interface DividerProps {
  orientation?: 'vertical' | 'horizontal';
  children?: FigmaDeclarativeNode;
  margin?: AutoLayoutProps['padding'];
  stroke?: RectangleProps['fill'];
}

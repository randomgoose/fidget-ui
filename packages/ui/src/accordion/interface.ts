import { ComponentStyle } from '../types';

export interface AccordionStyle {
  container: AutoLayoutProps;
  item: AutoLayoutProps;
  button: AutoLayoutProps;
  chevronContainer: AutoLayoutProps;
  chevron: Omit<SVGProps, 'src'> & { color: string };
  title: TextProps;
  content: TextProps;
  panel: AutoLayoutProps;
}

export type AccordionItemProps = {
  title: FigmaDeclarativeNode;
  content: FigmaDeclarativeNode;
  key: string | number;
};

export interface AccordionProps {
  style?: ComponentStyle<string, string, AccordionStyle>;
  id: string;
  data: AccordionItemProps[];
  width?: number | 'fill-parent';
}

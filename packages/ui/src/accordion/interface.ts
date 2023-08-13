import { ComponentStyle } from '../types';

export interface AccordionAnatomy {
  container: AutoLayoutProps;
  item: AutoLayoutProps;
  button: AutoLayoutProps;
  chevronContainer: AutoLayoutProps;
  chevron: Omit<SVGProps, 'src'> & { color: string };
  title: TextProps;
  content: TextProps;
  panel: AutoLayoutProps;
}

/**
 * @title Accordion Item
 */
export type AccordionItemProps = {
  /**
   * @en The title of the accordion item.
   */
  title: FigmaDeclarativeNode;
  /**
   * @en The content of the accordion item.
   */
  content: FigmaDeclarativeNode;
  /**
   * @en The key of the accordion item.
   */
  key: string | number;
};

/**
 * @title Accordion
 */
export interface AccordionProps {
  /**
   * @en The style object including all accordion parts.
   */
  style?: ComponentStyle<AccordionAnatomy>;
  /**
   * @en A unique identifier for the accordion.
   */
  id: string;
  /**
   * @en Accordion items.
   */
  data: AccordionItemProps[];
  /**
   * @en The width of the accordion.
   */
  width?: number | 'fill-parent';
}

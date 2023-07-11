export type AccordionItemProps = {
  title: FigmaDeclarativeNode;
  content: FigmaDeclarativeNode;
  key: string | number;
};

export interface AccordionProps {
  id: string;
  data: AccordionItemProps[];
  width?: number | 'fill-parent';
}

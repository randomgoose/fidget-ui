export type AccordionItemProps = {
    title: FigmaDeclarativeNode;
    content: FigmaDeclarativeNode; 
    key: string | number
}

export interface AccordionProps {
    data: AccordionItemProps[];
    width?: number | "fill-parent"
}
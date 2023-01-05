export interface AccordionProps {
    data: { title: string; content: string; key: string | number }[];
    width?: number | "fill-parent"
}
export type DescriptionListItem = {
    label: string;
    value: FigmaDeclarativeNode;
}

export interface DescriptionListProps extends AutoLayoutProps {
    items?: DescriptionListItem[];
}
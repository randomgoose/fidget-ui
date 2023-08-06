import { ComponentStyle } from '../types';

export interface DescriptionListAnatomy {
  container: AutoLayoutProps;
  item: AutoLayoutProps;
  label: TextProps;
  value: TextProps;
}

export type DescriptionListItem = {
  label: string;
  value: FigmaDeclarativeNode;
};

export interface DescriptionListProps extends AutoLayoutProps {
  style?: ComponentStyle<DescriptionListAnatomy>;
  items?: DescriptionListItem[];
}

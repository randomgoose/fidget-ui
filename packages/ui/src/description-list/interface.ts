import { ComponentStyle } from '../types';

export interface DescriptionListStyle {
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
  style?: ComponentStyle<string, string, DescriptionListStyle>;
  items?: DescriptionListItem[];
}

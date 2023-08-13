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

/**
 * @title Description List
 */
export interface DescriptionListProps extends AutoLayoutProps {
  /**
   * @en The style object including all description list parts.
   */
  style?: ComponentStyle<DescriptionListAnatomy>;
  /**
   * @en The description list entries.
   */
  items?: DescriptionListItem[];
}

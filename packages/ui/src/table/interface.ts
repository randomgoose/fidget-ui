import { ComponentStyle } from '../types';
import { TableAnatomy } from './styles';

/**
 * @title Table
 */
export interface TableProps extends AutoLayoutProps {
  /**
   * @en The style object including all table elements.
   */
  style?: ComponentStyle<TableAnatomy, string, string>;
}

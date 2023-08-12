import { ComponentStyle } from '../types';
import { TableAnatomy } from './styles';

export interface TableProps extends AutoLayoutProps {
  style?: ComponentStyle<TableAnatomy, string, string>;
}

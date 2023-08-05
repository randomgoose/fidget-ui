import { MenuListProps } from './interface';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout } = figma.widget;

export function MenuList(props: MenuListProps) {
  const { children, ...rest } = props;
  return <AutoLayout {...rest} name={NODE_NAME_MAP.list} children={children} />;
}

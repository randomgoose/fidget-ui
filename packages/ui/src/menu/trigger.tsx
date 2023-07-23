import { renderChildren } from '../utils';
import { MenuTriggerProps } from './interface';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout } = figma.widget;

export function MenuTrigger(props: MenuTriggerProps) {
  const { children, ...rest } = props;

  return (
    <AutoLayout {...rest} name={NODE_NAME_MAP.trigger}>
      {renderChildren(children)}
    </AutoLayout>
  );
}

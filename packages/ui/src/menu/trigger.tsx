import { renderChildren } from '../utils';
import { MenuTriggerProps } from './interface';

const { AutoLayout } = figma.widget;

export function MenuTrigger(props: MenuTriggerProps) {
  const { children, ...rest } = props;

  return (
    <AutoLayout {...rest} name="Menu Trigger">
      {renderChildren(children)}
    </AutoLayout>
  );
}

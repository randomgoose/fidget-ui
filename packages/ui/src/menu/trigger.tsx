import { renderChildren, splitProps } from '../utils';
import { MenuTriggerProps } from './interface';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout } = figma.widget;

export function MenuTrigger(props: MenuTriggerProps) {
  const { children, ...rest } = props;

  const { autoLayoutProps, textProps } = splitProps(rest);

  return (
    <AutoLayout {...autoLayoutProps} name={NODE_NAME_MAP.trigger}>
      {renderChildren(children, { textProps })}
    </AutoLayout>
  );
}

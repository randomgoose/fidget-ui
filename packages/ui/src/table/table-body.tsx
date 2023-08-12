import { getTableStyles } from './styles';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout, Fragment } = figma.widget;

export function TableBody(props: AutoLayoutProps) {
  const { body } = getTableStyles();

  const rootProps = {
    name: NODE_NAME_MAP.body,
    ...props,
  };

  return (
    <Fragment {...rootProps}>
      <AutoLayout {...body} name={NODE_NAME_MAP.body}>
        {props.children}
      </AutoLayout>
    </Fragment>
  );
}

import { getTableStyles } from './styles';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout, Fragment } = figma.widget;

export function TableHeader(props: AutoLayoutProps) {
  const { header } = getTableStyles();

  const rootProps = {
    name: NODE_NAME_MAP.header,
    ...props,
  };

  return (
    <Fragment {...rootProps}>
      <AutoLayout {...header} {...props}>
        {props.children}
      </AutoLayout>
    </Fragment>
  );
}

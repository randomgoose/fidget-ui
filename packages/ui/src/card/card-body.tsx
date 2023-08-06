import { renderChildren, splitProps } from '../utils';
import { CardBodyProps } from './interface';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout, Fragment } = figma.widget;

export function CardBody(props: CardBodyProps) {
  const { autoLayoutProps, textProps } = splitProps(props);
  // mount all props on Fragment to ensure that child.props can get all component-props in its parent
  const rootProps = {
    name: NODE_NAME_MAP.body,
    ...props,
  };

  return (
    <Fragment {...rootProps}>
      <AutoLayout {...autoLayoutProps}>{renderChildren(props.children, { textProps })}</AutoLayout>
    </Fragment>
  );
}

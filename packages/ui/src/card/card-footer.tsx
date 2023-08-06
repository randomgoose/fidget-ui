import { renderChildren, splitProps } from '../utils';
import { CardFooterProps } from './interface';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout, Fragment } = figma.widget;

export function CardFooter(props: CardFooterProps) {
  const { autoLayoutProps, textProps } = splitProps(props);
  // mount all props on Fragment to ensure that child.props can get all component-props in its parent
  const rootProps = {
    name: NODE_NAME_MAP.footer,
    ...props,
  };

  return (
    <Fragment {...rootProps}>
      <AutoLayout {...autoLayoutProps}>{renderChildren(props.children, { textProps })}</AutoLayout>
    </Fragment>
  );
}

import { renderChildren, splitProps } from '../utils';
import { CardHeaderProps } from './interface';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout, Fragment } = figma.widget;

export function CardHeader(props: CardHeaderProps) {
  const { autoLayoutProps, textProps } = splitProps(props);
  // mount all props on Fragment to ensure that child.props can get all component-props in its parent
  const rootProps = {
    name: NODE_NAME_MAP.header,
    ...props,
  };

  return (
    <Fragment {...rootProps}>
      <AutoLayout {...autoLayoutProps} key={props.key}>
        {renderChildren(props.children, { textProps })}
      </AutoLayout>
    </Fragment>
  );
}

import { ElementProps } from '../types';
import { renderChildren, splitProps } from '../utils';
import { NODE_NAME_MAP } from './utils';
import { merge } from 'lodash-es';

const { AutoLayout, Fragment } = figma.widget;

export function TableCell(props: ElementProps) {
  const rootProps = {
    name: NODE_NAME_MAP.cell,
    ...props,
  };

  const mergedProps = merge({}, props);
  const { autoLayoutProps, textProps } = splitProps(mergedProps);

  return (
    <Fragment {...rootProps}>
      <AutoLayout {...autoLayoutProps} width="fill-parent">
        {renderChildren(props.children, { textProps })}
      </AutoLayout>
    </Fragment>
  );
}

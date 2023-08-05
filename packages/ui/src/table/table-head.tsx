import { merge } from 'lodash-es';
import { ElementProps } from '../types';
import { renderChildren, splitProps } from '../utils';
import { getTableStyles } from './styles';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout } = figma.widget;

export function TableHead(props: ElementProps) {
  const { head } = getTableStyles();

  const mergedProps = merge(head, props);
  const { autoLayoutProps, textProps } = splitProps(mergedProps);

  return (
    <AutoLayout {...autoLayoutProps} name={NODE_NAME_MAP.head}>
      {renderChildren(props.children, { textProps })}
    </AutoLayout>
  );
}

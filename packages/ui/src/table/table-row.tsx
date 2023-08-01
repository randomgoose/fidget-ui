import { merge } from 'lodash-es';
import { ElementProps } from '../types';
import { renderChildren, splitProps } from '../utils';
import { getTableStyles } from './styles';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout } = figma.widget;

export function TableRow(props: ElementProps) {
  const { row } = getTableStyles();
  const mergedProps = merge(row, props);
  const { autolayoutProps, textProps } = splitProps(mergedProps);

  return (
    <AutoLayout {...autolayoutProps} name={NODE_NAME_MAP.row}>
      {renderChildren(props.children, { textProps })}
    </AutoLayout>
  );
}

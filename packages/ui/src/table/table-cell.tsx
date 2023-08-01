import { ElementProps } from '../types';
import { renderChildren, splitProps } from '../utils';
import { getTableStyles } from './styles';
import { NODE_NAME_MAP } from './utils';
import { merge } from 'lodash-es';

const { AutoLayout } = figma.widget;

export function TableCell(props: ElementProps) {
  const { cell } = getTableStyles();

  const mergedProps = merge(cell, props);
  const { autolayoutProps, textProps } = splitProps(mergedProps);

  return (
    <AutoLayout {...autolayoutProps} name={NODE_NAME_MAP.cell} width="fill-parent">
      {renderChildren(props.children, { textProps })}
    </AutoLayout>
  );
}

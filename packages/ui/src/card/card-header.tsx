import { merge } from 'lodash-es';
import { renderChildren, splitProps } from '../utils';
import { CardHeaderProps } from './interface';
import { getCardStyles } from './styles';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout } = figma.widget;

export function CardHeader(props: CardHeaderProps) {
  const { header } = getCardStyles();
  const mergedProps = merge(header, props);
  const { autolayoutProps, textProps } = splitProps(mergedProps);

  return (
    <AutoLayout {...autolayoutProps} name={NODE_NAME_MAP.header}>
      {renderChildren(props.children, { textProps })}
    </AutoLayout>
  );
}

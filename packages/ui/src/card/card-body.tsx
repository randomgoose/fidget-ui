import { merge } from 'lodash-es';
import { renderChildren, splitProps } from '../utils';
import { CardBodyProps } from './interface';
import { getCardStyles } from './styles';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout } = figma.widget;

export function CardBody(props: CardBodyProps) {
  const { body } = getCardStyles();
  const mergedProps = merge(body, props);
  const { autolayoutProps, textProps } = splitProps(mergedProps);

  return (
    <AutoLayout {...autolayoutProps} name={NODE_NAME_MAP.body}>
      {renderChildren(props.children, { textProps })}
    </AutoLayout>
  );
}

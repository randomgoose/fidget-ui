import { merge } from 'lodash-es';
import { renderChildren, splitProps } from '../utils';
import { CardFooterProps } from './interface';
import { getCardStyles } from './styles';

const { AutoLayout } = figma.widget;

export function CardFooter(props: CardFooterProps) {
  const { footer } = getCardStyles();
  const mergedProps = merge(footer, props);
  const { autolayoutProps, textProps } = splitProps(mergedProps);

  return (
    <AutoLayout {...autolayoutProps}>{renderChildren(props.children, { textProps })}</AutoLayout>
  );
}

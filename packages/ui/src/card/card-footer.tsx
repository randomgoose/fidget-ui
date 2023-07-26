import { CardFooterProps } from './interface';
import { getCardStyles } from './styles';

const { AutoLayout } = figma.widget;

export function CardFooter(props: CardFooterProps) {
  const { footer } = getCardStyles();

  return <AutoLayout {...footer}>{props.children}</AutoLayout>;
}

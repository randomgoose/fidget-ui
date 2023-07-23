import { CardBodyProps } from './interface';
import { getCardStyles } from './styles';

const { AutoLayout } = figma.widget;

export function CardBody(props: CardBodyProps) {
  const { children } = props;

  const { body } = getCardStyles();

  return (
    <AutoLayout {...body} name="Card Body">
      {children}
    </AutoLayout>
  );
}

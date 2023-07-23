import { CardHeaderProps } from './interface';
import { getCardStyles } from './styles';

const { AutoLayout } = figma.widget;

export function CardHeader(props: CardHeaderProps) {
  const { header } = getCardStyles();

  return (
    <AutoLayout {...header} name="Card Header">
      {props.children}
    </AutoLayout>
  );
}

import { CardHeader } from './card-header';
import { CardBody } from './card-body';
import { CardFooter } from './card-footer';
import { CardProps } from './interface';
import { getCardStyles } from './styles';

const { AutoLayout } = figma.widget;

const NODE_NAME_MAP = {
  container: 'Card Container',
  header: 'Card Header',
  body: 'Card Body',
  footer: 'Card Footer',
};

function Card(props: CardProps) {
  const { container } = getCardStyles();

  return (
    <AutoLayout {...container} name={NODE_NAME_MAP.container}>
      {props.children}
    </AutoLayout>
  );
}

export { Card, CardHeader, CardBody, CardFooter };

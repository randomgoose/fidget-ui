import { getTableStyles } from './styles';

const { AutoLayout } = figma.widget;

export function TableBody(props: AutoLayoutProps) {
  const { body } = getTableStyles();

  return <AutoLayout {...body}>{props.children}</AutoLayout>;
}

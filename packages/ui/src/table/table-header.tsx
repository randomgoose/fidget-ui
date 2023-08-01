import { getTableStyles } from './styles';

const { AutoLayout } = figma.widget;

export function TableHeader(props: AutoLayoutProps) {
  const { header } = getTableStyles();

  return <AutoLayout {...header}>{props.children}</AutoLayout>;
}

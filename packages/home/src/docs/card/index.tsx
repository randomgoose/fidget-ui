import { docStyle } from '../styles';

const { AutoLayout } = figma.widget;

export function CardDoc() {
  return <AutoLayout {...docStyle} name={'Card Doc'}></AutoLayout>;
}

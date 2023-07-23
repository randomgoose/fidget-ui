import { Divider, Heading } from 'fidget-ui';
import { docStyle } from '../styles';
import { MenuUsage } from './usage';
import { MenuPlacement } from './menu-placement';
import { MenuItemWithIcon } from './item-with-icon';

const { widget } = figma;
const { AutoLayout } = widget;

export function MenuDoc() {
  return (
    <AutoLayout {...docStyle} name={'Menu Doc'}>
      <Heading as={'h1'}>Menu</Heading>
      <Divider />
      <MenuUsage />
      <MenuItemWithIcon />
      <MenuPlacement />
    </AutoLayout>
  );
}

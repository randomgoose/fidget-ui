import { Avatar, Heading } from '../src/components';
import { Menu } from '../src/components/menu';
import { MenuItem } from '../src/components/menu/item';
import { docStyle } from './styles';

const { widget } = figma;
const { AutoLayout } = widget;

export function MenuDoc() {
  return (
    <AutoLayout {...docStyle} name={'Menu Doc'}>
      <Heading as={'h3'}>Menu</Heading>
      <Heading as={'h5'}></Heading>
      <Menu
        trigger={Avatar as any}
        // items={
        //   [{ type: "item", label: "", key: "" },]
        // }
        id="mk42"
      >
        <MenuItem></MenuItem>
      </Menu>
      <Menu trigger={Avatar as any} id="mk43" />
      <AutoLayout height={800}></AutoLayout>
    </AutoLayout>
  );
}

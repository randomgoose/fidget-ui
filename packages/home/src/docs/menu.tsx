import { Divider, Heading } from 'fidget-ui';
import { docStyle } from './styles';

const { widget } = figma;
const { AutoLayout } = widget;

export function MenuDoc() {
  return (
    <AutoLayout {...docStyle} name={'Menu Doc'}>
      <Heading as={'h1'}>Menu</Heading>
      <Divider />
      <Heading as={'h5'}></Heading>
      {/*<Menu id="73jk" items={*/}
      {/*    [{ __type: "divider" }]*/}
      {/*} />*/}
    </AutoLayout>
  );
}

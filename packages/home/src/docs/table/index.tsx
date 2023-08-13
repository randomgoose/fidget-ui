import { Heading, Divider } from 'fidget-ui';
import { docStyle } from '../styles';
import TableUsage from './usage';
import { P } from '../typography';

const { AutoLayout } = figma.widget;

export default function TableDoc() {
  return (
    <AutoLayout {...docStyle}>
      <Heading as="h1">Table</Heading>
      <P>Organize and display tabular data.</P>
      <Divider />
      <TableUsage />
    </AutoLayout>
  );
}

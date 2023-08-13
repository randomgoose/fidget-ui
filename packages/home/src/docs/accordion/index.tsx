import { Heading, Divider } from 'fidget-ui';
import { docStyle } from '../styles';
import { P } from '../typography';
import AccordionUsage from './usage';
import { APIs } from '../../components';

const { widget } = figma;
const { AutoLayout } = widget;

export function AccordionDoc() {
  return (
    <AutoLayout {...docStyle}>
      <Heading as="h1">Accordion</Heading>
      <P>Accordion renders a list of collapsible contents.</P>
      <Divider />
      <AccordionUsage />

      <APIs code={`__FIDGET_COMPONENT_API`} />
    </AutoLayout>
  );
}

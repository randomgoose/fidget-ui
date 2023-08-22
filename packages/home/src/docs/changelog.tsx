import { Accordion, AccordionItemProps, Divider, Heading } from 'fidget-ui';
import { docStyle } from './styles';

const { AutoLayout } = figma.widget;

const changelog: AccordionItemProps[] = [
  {
    key: 1,
    title: 'Aug 15, 2023',
    content: `- New components: Card, Menu, DatePicker, Stepper, and Table.
- New code blocks and syntax highlighting.
- Shadow styles`,
  },
];

export function Changelog() {
  return (
    <AutoLayout {...docStyle}>
      <Heading as="h1">Changelog</Heading>
      <Divider />
      <Accordion width={'fill-parent'} id="8j2n" data={changelog} />
    </AutoLayout>
  );
}

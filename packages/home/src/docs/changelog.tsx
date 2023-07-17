import { Accordion, AccordionItemProps, Divider, Heading } from 'fidget-ui';
import { docStyle } from './styles';

const { AutoLayout } = figma.widget;

const changelog: AccordionItemProps[] = [
  {
    key: 1,
    title: 'Jul 9, 2023 - Jul 15, 2023',
    content: `- [New] DatePicker
- [New] Menu
- [New] Shadow styles`,
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

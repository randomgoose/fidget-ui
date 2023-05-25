import { Accordion, Button, Heading, Divider, colors } from 'fidget-ui';
import { IconArrowRight } from 'fidget-ui/icons';
import { docStyle } from './styles';
import { P } from './typography';

const { widget } = figma;
const { AutoLayout, Text, Span } = widget;

export function AccordionDoc() {
  return (
    <AutoLayout {...docStyle}>
      <Heading as="h1">Accordion</Heading>
      <P>Accordion renders a list of collapsible contents.</P>
      <Divider />

      <Heading as="h5">Usage</Heading>

      <Accordion
        width={'fill-parent'}
        data={[
          {
            key: 1,
            title: 'FAQ',
            content: 'These are some frequently asked questions.',
          },
          {
            key: 2,
            title: (
              <Text fontWeight={'bold'} fill={colors.neutral[900]} fontSize={14} lineHeight={22}>
                Why use this <Span fill={colors.blue[500]}>library</Span>?
              </Text>
            ),
            content: 'You should definitely use this library.',
          },
          {
            key: 3,
            title: 'Start with an Accordion component',
            content: <Button rightIcon={<IconArrowRight />}>Documentation</Button>,
          },
        ]}
      />
      {/* <Code></Code> */}
    </AutoLayout>
  );
}

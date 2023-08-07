import { Accordion, Button, colors } from 'fidget-ui';
import { IconArrowRight } from 'fidget-ui/icons';

const { Text, Span } = figma.widget;

export function Usage() {
  return (
    <Accordion
      id="37dn"
      width="fill-parent"
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
  );
}

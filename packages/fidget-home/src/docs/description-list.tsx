import { DescriptionList, Heading, Avatar, Tag, TimePicker, Divider } from 'fidget-ui';
import { docStyle } from './styles';

const { widget } = figma;
const { AutoLayout, Text } = widget;

const COMPONENT_DESCRIPTION: any[] = [
  { label: 'Name', value: 'Button' },
  { label: 'Category', value: 'Action' },
  { label: 'Status', value: 'Done' },
  { label: 'Assignee', value: 'Chen' },
];

export function DescriptionListDoc() {
  const ticketDescription: any[] = [
    {
      label: 'Assignee',
      value: (
        <AutoLayout spacing={8} verticalAlignItems={'center'}>
          <Avatar size={'xs'} />
          <Text fontSize={14}>Chen Chen</Text>
        </AutoLayout>
      ),
    },
    {
      label: 'Status',
      value: (
        <Tag size="sm" variant={'subtle'}>
          Done
        </Tag>
      ),
    },
    {
      label: 'Created At',
      value: <TimePicker id="n957" placement="top" />,
    },
  ];

  return (
    <AutoLayout name="Description List Doc" {...docStyle}>
      <Heading as="h1">Description List</Heading>
      <Divider />
      <Heading as="h5">Usage</Heading>
      <DescriptionList items={COMPONENT_DESCRIPTION} />
      <Heading as="h5">Compose a description list with custom components</Heading>
      <DescriptionList spacing={24} items={ticketDescription} />
    </AutoLayout>
  );
}

import { DescriptionList, Heading, Tag } from '../components';
import { Avatar } from '../components/avatar';
import { DescriptionListItem } from '../components/description-list/interface';
import { TimePicker } from '../components/time-picker';
import { docStyle } from './styles';

const { widget } = figma;
const { AutoLayout, Text } = widget;

const COMPONENT_DESCRIPTION: DescriptionListItem[] = [
  { label: 'Name', value: 'Button' },
  { label: 'Category', value: 'Action' },
  { label: 'Status', value: 'Done' },
  { label: 'Assignee', value: 'Chen' },
];

export function DescriptionListDoc() {
  const ticketDescription: DescriptionListItem[] = [
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
      <Heading as="h5">Usage</Heading>
      <DescriptionList items={COMPONENT_DESCRIPTION} />
      <Heading as="h5">Compose a description list with custom components</Heading>
      <DescriptionList spacing={24} items={ticketDescription} />
    </AutoLayout>
  );
}

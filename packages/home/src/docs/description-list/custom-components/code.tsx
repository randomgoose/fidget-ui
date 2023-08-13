import { DescriptionList, Avatar, Tag, TimePicker } from 'fidget-ui';

const { AutoLayout, Text } = figma.widget;

export function DescriptionListCustomComponents() {
  const ticketDescription = [
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

  return <DescriptionList spacing={24} items={ticketDescription} />;
}

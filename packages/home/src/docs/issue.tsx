import {
  Avatar,
  Button,
  DescriptionList,
  Select,
  Tag,
  TextField,
  Divider,
  TimePicker,
  colors,
  Heading,
  DatePicker,
} from 'fidget-ui';

const { AutoLayout, useSyncedState, Text } = figma.widget;

const users = [
  { id: 'm87z', name: 'John Doe' },
  { id: 'v85k', name: 'Jane Doe' },
];

export function Issue() {
  const [title, setTitle] = useSyncedState(
    'issue-app/title',
    "[Divider] The `margin` prop doesn't work."
  );

  const items: any[] = [
    {
      label: 'Owner',
      value: <Avatar displayName="Chen Chen" />,
    },
    {
      label: 'Assignee',
      value: (
        <Select
          width={240}
          id="nkw3"
          options={users.map(({ id, name }) => ({ label: name, value: id }))}
          placement={'top'}
        />
      ),
    },
    {
      label: 'Due Time',
      value: <TimePicker id="v76m" placement="top" />,
    },
    {
      label: 'Due Date',
      value: <DatePicker id="c4m1" />,
    },
    {
      label: 'Status',
      value: (
        <Tag size="sm" variant={'subtle'} colorScheme={'orange'}>
          Pending
        </Tag>
      ),
    },
    {
      label: 'Project',
      value: 'Test',
    },
  ];

  return (
    <AutoLayout
      name="Issue"
      fill={colors.white}
      padding={24}
      cornerRadius={12}
      overflow={'visible'}
      direction={'vertical'}
      spacing={24}
      stroke={colors.neutral[200]}
    >
      <Heading as="h5">Issue#47</Heading>
      <TextField
        width={'fill-parent'}
        value={title}
        onTextEditEnd={(e) => setTitle(e.characters)}
        variant={'flush'}
      />
      <DescriptionList items={items} />
      <Divider />
      <AutoLayout horizontalAlignItems={'end'} width={'fill-parent'} verticalAlignItems={'center'}>
        <AutoLayout width={'fill-parent'} spacing={4}>
          <Text fontSize={12} fontWeight={'bold'}>
            Created at
          </Text>
          <Text fontSize={12}>{new Date().toDateString()}</Text>
        </AutoLayout>
        <Button colorScheme="blue">Save</Button>
      </AutoLayout>
    </AutoLayout>
  );
}

import { Button, DescriptionList, Select, Tag, TextField } from '../components';
import { DescriptionListItem } from '../components/description-list/interface';
import { Divider } from '../components/divider';
import { TimePicker } from '../components/time-picker';
import { colors } from '../styles';

const { AutoLayout, useSyncedState } = figma.widget;

const users = [
  { id: 'm87z', name: 'John Doe' },
  { id: 'v85k', name: 'Jane Doe' },
];

export function Issue() {
  const [title, setTitle] = useSyncedState('issue-app/title', '');

  const items: DescriptionListItem[] = [
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
    >
      <TextField
        width={'fill-parent'}
        value={title}
        onTextEditEnd={(e) => setTitle(e.characters)}
        variant={'flush'}
      />
      <DescriptionList items={items} />
      <Divider margin={{ top: 16, bottom: 16 }} />

      <AutoLayout horizontalAlignItems={'end'} width={'fill-parent'}>
        <Button colorScheme="blue">Save</Button>
      </AutoLayout>
    </AutoLayout>
  );
}

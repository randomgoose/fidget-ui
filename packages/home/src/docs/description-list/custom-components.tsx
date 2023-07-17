import { Heading, DescriptionList, Avatar, Tag, TimePicker, Tabs } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

const { AutoLayout, Text } = figma.widget;

export default function DescriptionListCustomComponents() {
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

  return (
    <>
      <Heading as="h5">Compose a description list with custom components</Heading>

      <Tabs
        id="description-list/custom-components"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <DescriptionList spacing={24} items={ticketDescription} />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code>
                {`const ticketDescription = [
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

() => <DescriptionList spacing={24} items={ticketDescription} />
`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}

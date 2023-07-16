import { Heading, DescriptionList, Tabs } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

const COMPONENT_DESCRIPTION = [
  { label: 'Name', value: 'Button' },
  { label: 'Category', value: 'Action' },
  { label: 'Status', value: 'Done' },
  { label: 'Assignee', value: 'Chen' },
];

export default function DescriptionListUsage() {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <Tabs
        id="description-list/usage"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <DescriptionList items={COMPONENT_DESCRIPTION} />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`const COMPONENT_DESCRIPTION = [
    { label: 'Name', value: 'Button' },
    { label: 'Category', value: 'Action' },
    { label: 'Status', value: 'Done' },
    { label: 'Assignee', value: 'Chen' },
];

() => <DescriptionList items={COMPONENT_DESCRIPTION} />
`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}

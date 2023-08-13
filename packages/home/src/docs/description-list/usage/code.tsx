import { DescriptionList } from 'fidget-ui';

const COMPONENT_DESCRIPTION = [
  { label: 'Name', value: 'Button' },
  { label: 'Category', value: 'Action' },
  { label: 'Status', value: 'Done' },
  { label: 'Assignee', value: 'Chen' },
];

export function DescriptionListUsage() {
  return <DescriptionList items={COMPONENT_DESCRIPTION} />;
}

import { Heading, Divider } from 'fidget-ui';
import { docStyle } from '../styles';
import DescriptionListUsage from './usage';
import DescriptionListCustomComponents from './custom-components';
import { APIs } from '../../components';

const { widget } = figma;
const { AutoLayout } = widget;

export function DescriptionListDoc() {
  return (
    <AutoLayout name="Description List Doc" {...docStyle}>
      <Heading as="h1">Description List</Heading>
      <Divider />

      <DescriptionListUsage />
      <DescriptionListCustomComponents />

      <APIs code={`__FIDGET_COMPONENT_API`} />
    </AutoLayout>
  );
}

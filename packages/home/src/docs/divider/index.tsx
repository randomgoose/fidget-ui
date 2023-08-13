import { Heading, Divider } from 'fidget-ui';
import { docStyle } from '../styles';
import { Code } from '../typography';
import DividerUsage from './usage';
import DividerOrientation from './orientation';
import DividerCustomElements from './custom-elements';
import { APIs } from '../../components';

const { widget } = figma;
const { AutoLayout } = widget;

export function DividerDoc() {
  return (
    <AutoLayout name="divider" {...docStyle}>
      <Heading as={'h1'}>Divider</Heading>
      <Divider />
      <Code>{`import { Divider } from "fidget-ui"`}</Code>
      <DividerUsage />
      <DividerOrientation />
      <DividerCustomElements />

      <APIs code={`__FIDGET_COMPONENT_API`} />
    </AutoLayout>
  );
}

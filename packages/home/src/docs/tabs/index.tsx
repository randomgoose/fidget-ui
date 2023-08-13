import { Heading, Divider } from 'fidget-ui';
import { docStyle } from '../styles';
import { P } from '../typography';
import TabsUsage from './usage';
import TabsVariants from './variants';
import FittedTabs from './fitted-tabs';
import { APIs } from '../../components';

const { widget } = figma;
const { AutoLayout } = widget;

export function TabsDoc() {
  return (
    <AutoLayout {...docStyle} name="Tabs Doc">
      <Heading as="h1">Tabs</Heading>
      <P>Tab components allow users to navigate between multiple panels.</P>
      <Divider />

      <TabsUsage />
      <TabsVariants />
      <FittedTabs />

      <APIs code={`__FIDGET_COMPONENT_API`} />
    </AutoLayout>
  );
}

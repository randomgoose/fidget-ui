import { Divider, Heading } from 'fidget-ui';
import { docStyle } from '../styles';
import CardUsage from './usage';
import CustomCard from './custom';

const { AutoLayout } = figma.widget;

export function CardDoc() {
  return (
    <AutoLayout {...docStyle} name={'Card Doc'}>
      <Heading as="h1">Card</Heading>
      <Divider />

      <CardUsage />
      <CustomCard />
    </AutoLayout>
  );
}

import { Button, Card, CardBody, CardFooter, CardHeader } from 'fidget-ui';
import { docStyle } from '../styles';

const { AutoLayout, Text } = figma.widget;

export function CardDoc() {
  return (
    <AutoLayout {...docStyle} name={'Card Doc'}>
      <Text></Text>
      <Card>
        <CardHeader fontSize={18} lineHeight={'28px'}>
          Fidget UI
        </CardHeader>
        <CardBody>A component library for Figma widgets.</CardBody>
        <CardFooter>
          <Button>View</Button>
        </CardFooter>
      </Card>
    </AutoLayout>
  );
}

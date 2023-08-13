import { Card, CardHeader, CardBody, CardFooter, Button } from 'fidget-ui';

export function CardCustomization() {
  return (
    <Card>
      <CardHeader fontSize={18} lineHeight={'28px'}>
        Fidget UI
      </CardHeader>
      <CardBody>A component library for Figma widgets.</CardBody>
      <CardFooter horizontalAlignItems={'end'}>
        <Button>View</Button>
      </CardFooter>
    </Card>
  );
}

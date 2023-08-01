import { Heading, Card, CardHeader, CardBody, CardFooter, Button } from 'fidget-ui';
import { Case } from '../../components/case';
import { Preview } from '../../components/preview';

export function CardCustomization() {
  return (
    <>
      <Heading as="h5">Customize card parts</Heading>

      <Preview
        id="card/usage"
        code={`import{ Card, CardHeader, CardBody, CardFooter } from 'fidget-ui'

() =>  <Card>
  <CardHeader fontSize={18} lineHeight={'28px'}>Fidget UI</CardHeader>
  <CardBody>A component library for Figma widgets.</CardBody>
  <CardFooter horizontalAlignItems={'end'}><Button>View</Button></CardFooter>
</Card>`}
      >
        <Case height={240}>
          <Card>
            <CardHeader fontSize={18} lineHeight={'28px'}>
              Fidget UI
            </CardHeader>
            <CardBody>A component library for Figma widgets.</CardBody>
            <CardFooter horizontalAlignItems={'end'}>
              <Button>View</Button>
            </CardFooter>
          </Card>
        </Case>
      </Preview>
    </>
  );
}

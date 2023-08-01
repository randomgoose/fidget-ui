import { Heading, Card, CardHeader, CardBody, CardFooter, Button } from 'fidget-ui';
import { Case } from '../../components/case';
import { Preview } from '../../components/preview';
import { P, Pre } from '../typography';

export function CardUsage() {
  return (
    <>
      <Heading as="h5">Usage</Heading>
      <P>
        Compose a Card with <Pre>CardHeader</Pre>, <Pre>CardBody</Pre> and <Pre>Card Footer</Pre>.
      </P>

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

import { Heading, Button } from 'fidget-ui';
import { Case } from '../../components/case';
import { Preview } from '../../components/preview';

export default function DisabledButtons() {
  return (
    <>
      <Heading as="h5">Disabled buttons</Heading>

      <Preview
        id="button/disabled-buttons"
        code={`() => <>
  <Button variant="filled" colorScheme="blue" disabled>Disabled</Button>
  <Button variant="outline" colorScheme="red" disabled>Disabled</Button>
  <Button disabled variant="ghost">Disabled</Button>
</>`}
      >
        <Case spacing={8} height={240}>
          <Button variant="filled" colorScheme="blue" disabled>
            Disabled
          </Button>
          <Button variant="outline" colorScheme="red" disabled>
            Disabled
          </Button>
          <Button disabled variant="ghost">
            Disabled
          </Button>
        </Case>
      </Preview>
    </>
  );
}

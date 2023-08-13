import { Button } from 'fidget-ui';

export function DisabledButtons() {
  return (
    <>
      <Button variant="filled" colorScheme="blue" disabled>
        Disabled
      </Button>
      <Button variant="outline" colorScheme="red" disabled>
        Disabled
      </Button>
      <Button disabled variant="ghost">
        Disabled
      </Button>
    </>
  );
}

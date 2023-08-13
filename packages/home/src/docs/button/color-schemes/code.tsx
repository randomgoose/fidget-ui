import { Button } from 'fidget-ui';

export function ButtonColorSchemes() {
  return (
    <>
      <Button colorScheme="blue">Blue</Button>
      <Button colorScheme="cyan" variant={'outline'}>
        Cyan
      </Button>
      <Button colorScheme="rose" variant={'ghost'}>
        Red
      </Button>
    </>
  );
}

import { Button } from 'fidget-ui';

export function ButtonVariants() {
  return (
    <>
      <Button variant="filled" onClick={() => figma.notify('This is a filled button.')}>
        Filled
      </Button>
      <Button variant="outline" onClick={() => figma.notify('This is an outline button.')}>
        Outline
      </Button>
      <Button variant="ghost" onClick={() => figma.notify('This is a ghost button.')}>
        Ghost
      </Button>
    </>
  );
}

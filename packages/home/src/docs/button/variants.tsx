import { Heading, Button } from 'fidget-ui';
import { Case } from '../../components/case';
import { P, Pre } from '../typography';
import { Preview } from '../../components/preview';

export default function ButtonVariants() {
  return (
    <>
      <Heading as={'h5'}>Variants</Heading>

      <P>
        Set the <Pre>Variant</Pre> prop to control the style of Button components. Available
        variants include <Pre>filled</Pre>, <Pre>outline</Pre> and <Pre>ghost</Pre>.
      </P>

      <Preview
        id={'button_variants'}
        code={`() => <>
  <Button variant="filled" onClick={() => notify('This is a filled button.')}>
    Filled
  </Button>
  <Button variant="outline" onClick={() => notify('This is an outline button.')}>
    Outline
  </Button>
  <Button variant="ghost" onClick={() => notify('This is a ghost button.')}>
    Ghost
  </Button>
</>`}
      >
        <Case spacing={8} height={240}>
          <Button variant="filled" onClick={() => figma.notify('This is a filled button.')}>
            Filled
          </Button>
          <Button variant="outline" onClick={() => figma.notify('This is an outline button.')}>
            Outline
          </Button>
          <Button variant="ghost" onClick={() => figma.notify('This is a ghost button.')}>
            Ghost
          </Button>
        </Case>
      </Preview>
    </>
  );
}

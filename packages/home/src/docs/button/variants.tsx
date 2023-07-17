import { Heading, Tabs, Button } from 'fidget-ui';
import { Case } from '../../components/case';
import { P, Pre, Code } from '../typography';

export default function ButtonVariants() {
  return (
    <>
      <Heading as={'h5'}>Variants</Heading>
      <P>
        Set the <Pre>Variant</Pre> prop to control the style of Button components. Available
        variants include <Pre>filled</Pre>, <Pre>outline</Pre> and <Pre>ghost</Pre>.
      </P>

      <Tabs
        id="button/variants"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case spacing={8} height={240}>
                <Button variant="filled" onClick={() => figma.notify('This is a filled button.')}>
                  Filled
                </Button>
                <Button
                  variant="outline"
                  onClick={() => figma.notify('This is an outline button.')}
                >
                  Outline
                </Button>
                <Button variant="ghost" onClick={() => figma.notify('This is a ghost button.')}>
                  Ghost
                </Button>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Button variant="filled" onClick={() => notify('This is a filled button.')}>
  Filled
</Button>
<Button variant="outline" onClick={() => notify('This is an outline button.')}>
  Outline
</Button>
<Button variant="ghost" onClick={() => notify('This is a ghost button.')}>
  Ghost
</Button>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}

import { Heading, IconButton } from 'fidget-ui';
import { IconArrowUp } from 'fidget-ui/icons';
import { Case } from '../../components/case';
import { P, Pre } from '../typography';
import { Preview } from '../../components/preview';

export function IconButtonVariants() {
  return (
    <>
      <Heading as="h5">Variants</Heading>
      <P>
        Identical to Button <Pre>variant</Pre> prop.
      </P>

      <Preview
        id="icon-button/variants"
        code={`() => <>
    <IconButton icon={<IconArrowUp />} onClick={() => { }} />
    <IconButton variant="outline" icon={<IconArrowUp />} onClick={() => { }} />
    <IconButton variant="ghost" icon={<IconArrowUp />} onClick={() => { }} />
</>`}
      >
        <Case spacing={8} height={240}>
          <IconButton icon={<IconArrowUp />} onClick={() => {}} />
          <IconButton variant="outline" icon={<IconArrowUp />} onClick={() => {}} />
          <IconButton variant="ghost" icon={<IconArrowUp />} onClick={() => {}} />
        </Case>
      </Preview>
    </>
  );
}

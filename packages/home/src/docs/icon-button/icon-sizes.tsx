import { Heading, IconButton } from 'fidget-ui';
import { IconArrowUp } from 'fidget-ui/icons';
import { Case } from '../../components/case';
import { P, Pre } from '../typography';
import { Preview } from '../../components/preview';

export function IconButtonSizes() {
  return (
    <>
      <Heading as="h5">Sizes</Heading>
      <P>
        Identical to Button <Pre>size</Pre> prop.
      </P>

      <Preview
        id="icon-button/sizes"
        children={
          <Case height={240} spacing={8}>
            {['sm', 'md', 'lg'].map((size) => (
              <IconButton key={size} icon={<IconArrowUp />} size={size as any} />
            ))}
          </Case>
        }
        code={`const { AutoLayout } = figma.widget

() => <AutoLayout spacing={4}>
    {['sm', 'md', 'lg'].map((size) => (
        <IconButton key={size} icon={<IconArrowUp />} size={size as any} />
    ))}
</AutoLayout>`}
      />
    </>
  );
}

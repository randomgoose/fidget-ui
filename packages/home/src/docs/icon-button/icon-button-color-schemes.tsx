import { Heading, IconButton } from 'fidget-ui';
import { IconArrowUp } from 'fidget-ui/icons';
import { Case } from '../../components/case';
import { P, Pre } from '../typography';
import { Preview } from '../../components/preview';

export function IconButtonColorSchemes() {
  return (
    <>
      <Heading as="h5">Color Schemes</Heading>
      <P>
        Identical to Button <Pre>colorScheme</Pre> prop.
      </P>

      <Preview
        id="icon-button/color-schemes"
        code={`import { IconButton } from 'fidget-ui'
import { IconArrowUp } from 'fidget-ui/icons'

() => <>
    <IconButton icon={<IconArrowUp />} variant="filled" colorScheme="blue" />
    <IconButton icon={<IconArrowUp />} variant="outline" colorScheme="cyan" />
    <IconButton icon={<IconArrowUp />} variant="ghost" colorScheme="rose" />
</>
`}
      >
        <Case height={240} spacing={8}>
          <IconButton icon={<IconArrowUp />} variant="filled" colorScheme="blue" />
          <IconButton icon={<IconArrowUp />} variant="outline" colorScheme="cyan" />
          <IconButton icon={<IconArrowUp />} variant="ghost" colorScheme="rose" />
        </Case>
      </Preview>
    </>
  );
}

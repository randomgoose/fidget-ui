import { Heading, colors, Button } from 'fidget-ui';
import { Case } from '../../components/case';
import { P, Pre } from '../typography';
import { Preview } from '../../components/preview';

const { useSyncedState } = figma.widget;

export default function ButtonColorSchemes() {
  const [, setPage] = useSyncedState('currentPage', 'button');

  return (
    <>
      <Heading as={'h5'}>Color Schemes</Heading>
      <P onClick={() => setPage('colors')}>
        Set <Pre>colorScheme</Pre> prop to customize Button colors. See{' '}
        <Pre fill={colors.blue[500]}>Colors</Pre> for available color.
      </P>

      <Preview
        id="button_color-schemes"
        code={`() => <>
  <Button colorScheme="blue">Blue</Button>
  <Button colorScheme="cyan" variant={'outline'}>Cyan</Button>
  <Button colorScheme="rose" variant={'ghost'}>Red</Button>
</>`}
      >
        <Case spacing={4} height={240}>
          <Button colorScheme="blue">Blue</Button>
          <Button colorScheme="cyan" variant={'outline'}>
            Cyan
          </Button>
          <Button colorScheme="rose" variant={'ghost'}>
            Red
          </Button>
        </Case>
      </Preview>
    </>
  );
}

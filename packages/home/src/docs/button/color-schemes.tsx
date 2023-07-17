import { Heading, colors, Tabs, Button } from 'fidget-ui';
import { Case } from '../../components/case';
import { P, Code, Pre } from '../typography';

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

      <Tabs
        id="button/color-schemes"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case spacing={4} height={240}>
                <Button colorScheme="blue">Blue</Button>
                <Button colorScheme="cyan" variant={'outline'}>
                  Cyan
                </Button>
                <Button colorScheme="rose" variant={'ghost'}>
                  Red
                </Button>
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Button colorScheme="blue">Blue</Button>
<Button colorScheme="cyan" variant={'outline'}>Cyan</Button>
<Button colorScheme="rose" variant={'ghost'}>Red</Button>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}

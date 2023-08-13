import { Heading, colors } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { ButtonColorSchemes } from './code';

const { useSyncedState } = figma.widget;

export default function () {
  const [, setPage] = useSyncedState('currentPage', 'button');

  return (
    <>
      <Heading as={'h5'}>Color Schemes</Heading>
      <P onClick={() => setPage('colors')}>
        Set <Pre>colorScheme</Pre> prop to customize Button colors. See{' '}
        <Pre fill={colors.blue[500]}>Colors</Pre> for available color.
      </P>

      <Preview id="button_color-schemes" code={`__FIDGET_DEMO_CODE`}>
        <Case spacing={4} height={240}>
          <ButtonColorSchemes />
        </Case>
      </Preview>
    </>
  );
}

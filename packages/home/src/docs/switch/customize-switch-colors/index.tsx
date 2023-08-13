import { colors, Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { CustomizeSwitchColors } from './code';
import { P, Pre } from '../../typography';

const { Span, useSyncedState } = figma.widget;

export default function () {
  const [, setCurrentPage] = useSyncedState('currentPage', 'switch');

  return (
    <>
      <Heading as="h5">Customize Switch colors</Heading>

      <P onClick={() => setCurrentPage('colors')}>
        Pass a <Pre>colorScheme</Pre> prop to set the background color of Switch components. See{' '}
        <Span fill={colors.blue[500]}>Colors</Span> for available color schemes.
      </P>

      <Preview id="switch/customize-colors" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <CustomizeSwitchColors />
        </Case>
      </Preview>
    </>
  );
}

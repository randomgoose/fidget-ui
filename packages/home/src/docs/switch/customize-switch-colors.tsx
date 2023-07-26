import { Heading, colors, Switch } from 'fidget-ui';
import { Case } from '../../components/case';
import { P, Pre } from '../typography';
import { Preview } from '../../components/preview';

const { useSyncedState, Span } = figma.widget;

export function CustomizeSwitchColors() {
  const [, setCurrentPage] = useSyncedState('currentPage', 'switch');

  return (
    <>
      <Heading as="h5">Customize Switch colors</Heading>
      <P onClick={() => setCurrentPage('colors')}>
        Pass a <Pre>colorScheme</Pre> prop to set the background color of Switch components. See{' '}
        <Span fill={colors.blue[500]}>Colors</Span> for available color schemes.
      </P>

      <Preview
        id="swtich/customize-switch-colors"
        code={`import { Switch } from 'fidget-ui'

() => (
    <>
        <Switch id="kfrh" colorScheme="emerald" defaultChecked />
        <Switch id="21jd" colorScheme="orange" defaultChecked />
        <Switch id="39dk" colorScheme="neutral" defaultChecked />
    </>)`}
      >
        <Case height={240} spacing={8}>
          <Switch id="kfrh" colorScheme="emerald" defaultChecked />
          <Switch id="21jd" colorScheme="orange" defaultChecked />
          <Switch id="39dk" colorScheme="neutral" defaultChecked />
        </Case>
      </Preview>
    </>
  );
}

import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { P, Pre } from '../../typography';
import { Orientation } from './code';

export default function () {
  return (
    <>
      <Heading as={'h5'}>Orientation</Heading>

      <P>
        By default, the radios are horizontally placed. Change the <Pre>orientation</Pre> prop to{' '}
        <Pre>vertical</Pre> to vertically stack radios.
      </P>

      <Preview id="radio/orientation" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <Orientation />
        </Case>
      </Preview>
    </>
  );
}

import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { P, Pre } from '../../typography';
import { DividerOrientation } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Orientation</Heading>

      <P>
        Set the orientation of a Divider with <Pre>oritentation</Pre> prop. It can either be{' '}
        <Pre>horizontal</Pre> or <Pre>vertical</Pre>.
      </P>

      <Preview id="divider/orientation" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <DividerOrientation />
        </Case>
      </Preview>
    </>
  );
}

import { Heading } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { ControlledSwitch } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Controlled Switch</Heading>

      <P>
        Pass a <Pre>checked</Pre> prop to control the state of a Switch. Controlled Switch
        components do not require an <Pre>id</Pre>.
      </P>

      <Preview id="switch/controlled" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <ControlledSwitch />
        </Case>
      </Preview>
    </>
  );
}

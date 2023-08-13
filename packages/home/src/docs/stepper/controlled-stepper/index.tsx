import { Heading } from 'fidget-ui';
import { P } from '../../typography';
import { Case, Preview } from '../../../components';
import { ControlledSteppers } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Controlled Steppers</Heading>

      <P>Steppers can either be controlled or uncontrolled.</P>

      <Preview id="stepper/controlled-steppers" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <ControlledSteppers />
        </Case>
      </Preview>
    </>
  );
}

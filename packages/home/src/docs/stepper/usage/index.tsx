import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { P } from '../../typography';
import { StepperUsage } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <P>Type in or adjust the value using the increment/decrement buttons.</P>

      <Preview id="stepper/usage" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <StepperUsage />
        </Case>
      </Preview>
    </>
  );
}

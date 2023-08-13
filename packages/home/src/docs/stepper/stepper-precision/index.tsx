import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { StepperPrecision } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Precision</Heading>

      <Preview id="stepper/precision" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <StepperPrecision />
        </Case>
      </Preview>
    </>
  );
}

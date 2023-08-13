import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { StepperStep } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Step</Heading>

      <Preview id="stepper/step" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={24} direction="vertical">
          <StepperStep />
        </Case>
      </Preview>
    </>
  );
}

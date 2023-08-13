import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { StepperSizes } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Sizes</Heading>

      <Preview id="stepper/sizes" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} direction="vertical" spacing={16}>
          <StepperSizes />
        </Case>
      </Preview>
    </>
  );
}

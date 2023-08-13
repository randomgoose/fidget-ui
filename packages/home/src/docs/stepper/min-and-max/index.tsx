import { Heading } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { StepperMinAndMax } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Min and max value</Heading>

      <P>
        Set the value range with <Pre>min</Pre> and <Pre>max</Pre> prop. Any invalid input will be
        reset to the current value.
      </P>

      <Preview id="stepper/min-and-max" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} direction="vertical" spacing={24}>
          <StepperMinAndMax />
        </Case>
      </Preview>
    </>
  );
}

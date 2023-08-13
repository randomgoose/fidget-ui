import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { ControlledRadioGroup } from './code';

export default function () {
  return (
    <>
      <Heading as={'h5'}>Controlled RadioGroup</Heading>

      <Preview id="radio/controlled-radio-group" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={32} direction="vertical">
          <ControlledRadioGroup />
        </Case>
      </Preview>
    </>
  );
}

import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { TimePickerUsage } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <Preview id="timer-pickder/usage" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <TimePickerUsage />
        </Case>
      </Preview>
    </>
  );
}

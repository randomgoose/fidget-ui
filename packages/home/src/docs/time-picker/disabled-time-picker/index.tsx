import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { DisabledTimePicker } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Disabled TimePicker</Heading>

      <Preview id="time-pickder/disabled" code={`__FIDGET_DEMO_CODE`}>
        <Case height={480} direction="vertical" spacing={24}>
          <DisabledTimePicker />
        </Case>
      </Preview>
    </>
  );
}

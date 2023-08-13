import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { DisabledSwitch } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Disabled Switch</Heading>

      <Preview id="switch/disabled" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <DisabledSwitch />
        </Case>
      </Preview>
    </>
  );
}

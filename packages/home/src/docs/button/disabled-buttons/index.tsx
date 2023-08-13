import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { DisabledButtons } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Disabled buttons</Heading>

      <Preview id="button/disabled-buttons" code={`__FIDGET_DEMO_CODE`}>
        <Case spacing={8} height={240}>
          <DisabledButtons />
        </Case>
      </Preview>
    </>
  );
}

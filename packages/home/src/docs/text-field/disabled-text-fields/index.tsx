import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { DisabledTextFields } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Disabled Text Field</Heading>

      <Preview id="text-field/disabled" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <DisabledTextFields />
        </Case>
      </Preview>
    </>
  );
}

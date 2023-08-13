import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { DisabledCheckbox } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Disabled Checkbox</Heading>

      <Preview id="checkbox/disabled-checkbox" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <DisabledCheckbox />
        </Case>
      </Preview>
    </>
  );
}

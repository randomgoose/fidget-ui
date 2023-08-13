import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { DatePickerUsage } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <Preview id="date-picker/usage" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <DatePickerUsage />
        </Case>
      </Preview>
    </>
  );
}
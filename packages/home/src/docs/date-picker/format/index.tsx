import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { DatePickerFormat } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Format</Heading>

      <Preview id="date-picker/format" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <DatePickerFormat />
        </Case>
      </Preview>
    </>
  );
}

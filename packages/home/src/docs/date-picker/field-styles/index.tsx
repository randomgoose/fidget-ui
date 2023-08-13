import { Heading } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { DatePickerFieldStyles } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Field styles</Heading>

      <P>
        The datepicker field extends a basic field component. Style props such as <Pre>variant</Pre>{' '}
        and <Pre>size</Pre> also apply.
      </P>

      <Preview id="date-picker/field-styles" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} direction="vertical" spacing={16}>
          <DatePickerFieldStyles />
        </Case>
      </Preview>
    </>
  );
}

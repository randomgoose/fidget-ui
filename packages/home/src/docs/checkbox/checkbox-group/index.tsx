import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { CheckboxCheckboxGroup } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Checkbox group</Heading>
      <Preview id="checkbox/checkbox-group" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <CheckboxCheckboxGroup />
        </Case>
      </Preview>
    </>
  );
}

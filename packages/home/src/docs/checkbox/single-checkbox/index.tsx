import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { SingleCheckbox } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Single checkbox</Heading>

      <Preview id="checkbox/single-checkbox" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <SingleCheckbox />
        </Case>
      </Preview>
    </>
  );
}

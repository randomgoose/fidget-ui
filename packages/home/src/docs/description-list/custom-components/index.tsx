import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { DescriptionListCustomComponents } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Compose a description list with custom components</Heading>

      <Preview id="description-list/custom-components" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <DescriptionListCustomComponents />
        </Case>
      </Preview>
    </>
  );
}

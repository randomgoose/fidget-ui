import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { DescriptionListUsage } from './code';

export default function () {
  return (
    <>
      <Heading as="h5"></Heading>

      <Preview id="description-list/usage" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <DescriptionListUsage />
        </Case>
      </Preview>
    </>
  );
}

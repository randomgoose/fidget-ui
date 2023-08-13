import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { TagVariants } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Variants</Heading>

      <Preview id="tag/variants" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <TagVariants />
        </Case>
      </Preview>
    </>
  );
}

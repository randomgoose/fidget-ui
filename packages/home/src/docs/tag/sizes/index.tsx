import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { TagSizes } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Sizes</Heading>

      <Preview id="tag/sizes" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <TagSizes />
        </Case>
      </Preview>
    </>
  );
}

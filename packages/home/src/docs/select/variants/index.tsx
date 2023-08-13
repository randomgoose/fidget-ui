import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { SelectVariants } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Variants</Heading>

      <Preview id="select/variants" code={`__FIDGET_DEMO_CODE`}>
        <Case height={480} direction="vertical" spacing={8}>
          <SelectVariants />
        </Case>
      </Preview>
    </>
  );
}

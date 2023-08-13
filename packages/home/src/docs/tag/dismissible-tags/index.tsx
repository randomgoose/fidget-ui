import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { DismissibleTags } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Dismissible tags</Heading>

      <Preview id="tags/dismissible-tags" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <DismissibleTags />
        </Case>
      </Preview>
    </>
  );
}

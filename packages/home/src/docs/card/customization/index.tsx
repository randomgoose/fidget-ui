import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { CardCustomization } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Customize card parts</Heading>

      <Preview id="card/usage" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <CardCustomization />
        </Case>
      </Preview>
    </>
  );
}

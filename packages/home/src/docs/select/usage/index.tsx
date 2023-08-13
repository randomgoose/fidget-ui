import { Heading } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { SelectUsage } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <P>
        Pass in an array of options and get user selection from the <Pre>onChange</Pre> callback.
      </P>

      <Preview id="select/usage" code={`__FIDGET_DEMO_CODE`}>
        <Case height={480} spacing={8} direction="vertical">
          <SelectUsage />
        </Case>
      </Preview>
    </>
  );
}

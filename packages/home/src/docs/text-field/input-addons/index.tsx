import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { InputAddons } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Addons</Heading>

      <Preview id="text-field/input-addons" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} direction="vertical" spacing={8}>
          <InputAddons />
        </Case>
      </Preview>
    </>
  );
}

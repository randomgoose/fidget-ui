import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { MenuUsage } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <Preview id="menu/usage" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <MenuUsage />
        </Case>
      </Preview>
    </>
  );
}

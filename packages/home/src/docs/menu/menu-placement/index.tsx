import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { MenuPlacement } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Placement</Heading>

      <Preview id="menu/placement" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <MenuPlacement />
        </Case>
      </Preview>
    </>
  );
}

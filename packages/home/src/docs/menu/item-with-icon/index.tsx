import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { MenuItemWithIcon } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">MenuItem with icon</Heading>

      <Preview id="menu/item-with-icon" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <MenuItemWithIcon />
        </Case>
      </Preview>
    </>
  );
}

import { IconButton } from 'fidget-ui';
import { IconArrowUp } from 'fidget-ui/icons';

export function IconButtonDisabledButtons() {
  return (
    <>
      <IconButton icon={<IconArrowUp />} variant="filled" colorScheme="blue" disabled />
      <IconButton icon={<IconArrowUp />} variant="outline" colorScheme="red" disabled />
      <IconButton icon={<IconArrowUp />} disabled variant="ghost" />
    </>
  );
}

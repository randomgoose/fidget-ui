import { IconButton } from 'fidget-ui';
import { IconArrowUp } from 'fidget-ui/icons';

export function IconButtonColorSchemes() {
  return (
    <>
      <IconButton icon={<IconArrowUp />} variant="filled" colorScheme="blue" />
      <IconButton icon={<IconArrowUp />} variant="outline" colorScheme="cyan" />
      <IconButton icon={<IconArrowUp />} variant="ghost" colorScheme="rose" />
    </>
  );
}

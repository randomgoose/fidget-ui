import { IconButton } from 'fidget-ui';
import { IconArrowUp } from 'fidget-ui/icons';

export function IconButtonVariants() {
  return (
    <>
      <IconButton icon={<IconArrowUp />} onClick={() => {}} />
      <IconButton variant="outline" icon={<IconArrowUp />} onClick={() => {}} />
      <IconButton variant="ghost" icon={<IconArrowUp />} onClick={() => {}} />
    </>
  );
}

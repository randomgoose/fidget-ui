import { IconButton } from 'fidget-ui';
import { IconArrowUp } from 'fidget-ui/icons';

export function IconButtonSizes() {
  return (
    <>
      {['sm', 'md', 'lg'].map((size) => (
        <IconButton key={size} icon={<IconArrowUp />} size={size as any} />
      ))}
    </>
  );
}

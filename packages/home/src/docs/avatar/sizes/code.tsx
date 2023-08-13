import { Avatar } from 'fidget-ui';

export function AvatarSizes() {
  return (
    <>
      {['xl', 'lg', 'md', 'sm', 'xs', 72].map((size) => (
        <Avatar
          key={size}
          size={size as any}
          src="https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      ))}
    </>
  );
}

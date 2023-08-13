import { Avatar, colors } from 'fidget-ui';

export function AvatarUsage() {
  return (
    <>
      <Avatar
        src={
          'https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
        displayName="John Doe"
        fill={colors.blue[500]}
      />
      <Avatar displayName="John Doe" fill={colors.blue[500]} />
      <Avatar fill={colors.blue[500]} />
    </>
  );
}

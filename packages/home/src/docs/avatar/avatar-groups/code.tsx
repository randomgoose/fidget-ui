import { Avatar, AvatarGroup, colors } from 'fidget-ui';

export function AvatarGroups() {
  return (
    <>
      <AvatarGroup max={2}>
        <Avatar
          src={
            'https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }
        />
        <Avatar displayName="John Doe" fill={colors.blue[500]} />
        <Avatar displayName="John Doe" fill={colors.green[500]} />
        <Avatar displayName="John Doe" fill={colors.blue[500]} />
        <Avatar displayName="John Doe" fill={colors.blue[500]} />
      </AvatarGroup>

      <AvatarGroup max={2} size={'lg'}>
        <Avatar
          src={
            'https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }
        />
        <Avatar displayName="John Doe" fill={colors.blue[500]} />
        <Avatar displayName="John Doe" fill={colors.green[500]} />
        <Avatar displayName="John Doe" fill={colors.blue[500]} />
        <Avatar displayName="John Doe" fill={colors.blue[500]} />
      </AvatarGroup>

      <AvatarGroup max={2} size={'lg'} stacked>
        <Avatar
          src={
            'https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }
        />
        <Avatar displayName="John Doe" fill={colors.blue[500]} />
        <Avatar displayName="John Doe" fill={colors.green[500]} />
        <Avatar displayName="John Doe" fill={colors.blue[500]} />
        <Avatar displayName="John Doe" fill={colors.blue[500]} />
      </AvatarGroup>
    </>
  );
}

import { Avatar, AvatarGroup, Heading, Tabs, colors } from 'fidget-ui';
import { Code, P, Pre } from '../typography';
import { Case } from '../../components/case';

const { AutoLayout } = figma.widget;

export default function AvatarGroups() {
  return (
    <>
      <Heading as="h5">Avatar Group</Heading>
      <AutoLayout direction="vertical" width={'fill-parent'}>
        <P width={'fill-parent'}>AvatarGroup component is used for containing multiple avatars.</P>
        <P width={'fill-parent'}>
          · Specify <Pre>max</Pre> prop to hide excessive avatars.
        </P>
        <P width={'fill-parent'}>
          · Set <Pre>size</Pre> prop to control the sizes of all avatars inside.
        </P>
        <P width={'fill-parent'}>
          · Enable <Pre>stacked</Pre> prop to stack avatars. Or specify <Pre>spacing</Pre> to adjust
          the spacing between avatars.
        </P>
      </AutoLayout>

      <Tabs
        id="avatar/avatar-groups"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} spacing={32}>
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
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code>
                {`<AvatarGroup max={2}>
    <Avatar src={'https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
    <Avatar displayName="John Doe" fill={colors.blue[500]} />
    <Avatar displayName="John Doe" fill={colors.green[500]} />
    <Avatar displayName="John Doe" fill={colors.blue[500]} />
    <Avatar displayName="John Doe" fill={colors.blue[500]} />
</AvatarGroup>

<AvatarGroup max={2} size={'lg'}>
    <Avatar src={'https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
    <Avatar displayName="John Doe" fill={colors.blue[500]} />
    <Avatar displayName="John Doe" fill={colors.green[500]} />
    <Avatar displayName="John Doe" fill={colors.blue[500]} />
    <Avatar displayName="John Doe" fill={colors.blue[500]} />
</AvatarGroup>

<AvatarGroup max={2} size={'lg'} stacked>
    <Avatar src={'https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
    <Avatar displayName="John Doe" fill={colors.blue[500]} />
    <Avatar displayName="John Doe" fill={colors.green[500]} />
    <Avatar displayName="John Doe" fill={colors.blue[500]} />
    <Avatar displayName="John Doe" fill={colors.blue[500]} />
</AvatarGroup>`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}

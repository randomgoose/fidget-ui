import { Avatar, Heading, colors, Tabs } from 'fidget-ui';
import { Code, Pre } from '../typography';
import { Case } from '../../components/case';

const { AutoLayout, Text } = figma.widget;

export default function AvatarUsage() {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <AutoLayout direction="vertical" width={'fill-parent'} spacing={16}>
        <Text width={'fill-parent'}>
          - Pass in an <Pre>src</Pre> prop (like the built-in Image Component) to set the image that
          represents the user.
        </Text>
        <Text width={'fill-parent'}>
          - If the <Pre>src</Pre> prop is not set, specify the <Pre>name</Pre> prop to display the
          initials of the given name. Otherwise, a default icon is displayed.
        </Text>
      </AutoLayout>

      <Tabs
        id="avatar/usage"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case spacing={8} height={240}>
                <Avatar
                  src={
                    'https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  }
                  displayName="John Doe"
                  fill={colors.blue[500]}
                />
                <Avatar displayName="John Doe" fill={colors.blue[500]} />
                <Avatar fill={colors.blue[500]} />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Avatar
    src={
        'https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
    displayName="John Doe"
    fill={colors.blue[500]}
/>
<Avatar displayName="John Doe" fill={colors.blue[500]} />
<Avatar fill={colors.blue[500]} />
                            `}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}

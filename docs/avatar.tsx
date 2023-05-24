import { Heading, Avatar, AvatarGroup, Divider, colors } from '../src/components';
import { AvatarSize } from '../src/components/avatar/interface';
import { codeStyle, docStyle } from './styles';
import { Code } from './typography';

const { widget } = figma;
const { AutoLayout, Text, Span } = widget;

export function AvatarDoc() {
  return (
    <AutoLayout {...docStyle} name="avatar">
      <Heading as="h1">Avatar</Heading>
      <Text width={'fill-parent'}>
        Use Avatar component to display pictures, name initials or an default icon that represents a
        user.
      </Text>
      <Divider />
      <Code>{`import { Avatar } from "fidget-ui"`}</Code>

      <Heading as="h5">Usage</Heading>

      <AutoLayout direction="vertical" width={'fill-parent'} spacing={16}>
        <Text width={'fill-parent'}>
          - Pass in an <Span {...codeStyle}>src</Span> prop (like the built-in Image Component) to
          set the image that represents the user.
        </Text>
        <Text width={'fill-parent'}>
          - If the <Span {...codeStyle}>src</Span> prop is not set, specify the{' '}
          <Span {...codeStyle}>name</Span> prop to display the initials of the given name.
          Otherwise, a default icon is displayed.
        </Text>
      </AutoLayout>

      <AutoLayout spacing={8}>
        <Avatar
          src={
            'https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }
          displayName="Chen Chen"
          fill={colors.blue[500]}
        />
        <Avatar displayName="Chen Chen" fill={colors.blue[500]} />
        <Avatar displayName="陈晨" fill={colors.blue[500]} />
        <Avatar fill={colors.blue[500]} />
      </AutoLayout>

      <Heading as="h5">Background colors</Heading>
      <Text width={'fill-parent'}>
        Set the <Span {...codeStyle}>fill</Span> prop to customize the background color of an
        Avatar.
      </Text>

      <AutoLayout spacing={8}>
        <Avatar fill={colors.emerald[500]} />
        <Avatar fill={colors.rose[500]} />
        <Avatar fill={colors.yellow[500]} />
      </AutoLayout>

      <Heading as="h5">Sizes</Heading>
      <Text width={'fill-parent'}>
        Avatar comes in with 5 predefined sizes: <Span {...codeStyle}>xs/sm/md/lg/xl</Span>. Or you
        can specify a number.
      </Text>
      <AutoLayout spacing={8}>
        {['xl', 'lg', 'md', 'sm', 'xs', 72].map((size) => (
          <Avatar
            size={size as AvatarSize}
            src="https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            key={size}
          />
        ))}
      </AutoLayout>

      <Heading as="h5">Avatar Group</Heading>
      <AutoLayout direction="vertical" width={'fill-parent'} spacing={16}>
        <Text width={'fill-parent'}>
          AvatarGroup component is used for containing multiple avatars.
        </Text>
        <Text width={'fill-parent'}>
          - Specify <Span {...codeStyle}>max</Span> prop to hide excessive avatars.
        </Text>
        <Text width={'fill-parent'}>
          - Set <Span {...codeStyle}>size</Span> prop to control the sizes of all avatars inside.
        </Text>
        <Text width={'fill-parent'}>
          - Enable <Span {...codeStyle}>stacked</Span> prop to stack avatars. Or specify{' '}
          <Span {...codeStyle}>spacing</Span> to adjust the spacing between avatars.
        </Text>
      </AutoLayout>

      <AutoLayout spacing={24}>
        <AvatarGroup max={2}>
          <Avatar
            src={
              'https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
          />
          <Avatar displayName="Chen Chen" fill={colors.blue[500]} />
          <Avatar displayName="Billy Shears" fill={colors.green[500]} />
          <Avatar displayName="Chen Chen" fill={colors.blue[500]} />
          <Avatar displayName="Chen Chen" fill={colors.blue[500]} />
        </AvatarGroup>

        <AvatarGroup max={2} size={'lg'}>
          <Avatar
            src={
              'https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
          />
          <Avatar displayName="Chen Chen" fill={colors.blue[500]} />
          <Avatar displayName="Billy Shears" fill={colors.green[500]} />
          <Avatar displayName="Chen Chen" fill={colors.blue[500]} />
          <Avatar displayName="Chen Chen" fill={colors.blue[500]} />
        </AvatarGroup>

        <AvatarGroup max={2} size={'lg'} stacked>
          <Avatar
            src={
              'https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
          />
          <Avatar displayName="Chen Chen" fill={colors.blue[500]} />
          <Avatar displayName="Billy Shears" fill={colors.green[500]} />
          <Avatar displayName="Chen Chen" fill={colors.blue[500]} />
          <Avatar displayName="Chen Chen" fill={colors.blue[500]} />
        </AvatarGroup>
      </AutoLayout>
    </AutoLayout>
  );
}

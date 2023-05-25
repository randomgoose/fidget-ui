import { colors } from '../styles';
import { IconUser } from '../icons';
import { AvatarGroupProps, AvatarProps } from './interface';
import { getAvatarStyles } from './styles';

const { widget } = figma;
const { AutoLayout, Text, h } = widget;

const isAvatar = (component: any) => {
  if ('props' in component) {
    if ('name' in component.props && component.props.name.startsWith('Avatar')) {
      return true;
    }
  }
  return false;
};

export function Avatar({ src, size = 'md', fill, displayName, ...props }: AvatarProps) {
  const {
    avatar: { padding, ...rest },
  } = getAvatarStyles({ size });

  const getInitials = (name: string) => {
    const [firstName, lastName] = name.split(' ');
    return firstName && lastName
      ? `${firstName.charAt(0)}${lastName.charAt(0)}`
      : firstName.charAt(0);
  };

  const initials = displayName ? getInitials(displayName) : null;

  const fallbackAvatar = (
    <AutoLayout
      name={`Avatar`}
      {...props}
      tooltip={displayName}
      fill={fill || colors.neutral[300]}
      padding={padding}
      verticalAlignItems="center"
      horizontalAlignItems={'center'}
      {...rest}
    >
      {initials ? (
        <Text fill={'#ffffff'}>{initials}</Text>
      ) : typeof fill === 'object' ? null : (
        <IconUser width={'fill-parent'} height={'fill-parent'} color={colors.white} />
      )}
    </AutoLayout>
  );

  return src !== undefined ? (
    <AutoLayout
      name="Avatar"
      {...props}
      fill={{ type: 'image', src }}
      tooltip={displayName}
      {...rest}
    />
  ) : (
    fallbackAvatar
  );
}

export function AvatarGroup({
  children,
  max = 5,
  size = 'md',
  stacked = false,
  spacing,
  ...rest
}: AvatarGroupProps) {
  const { avatar } = getAvatarStyles({ size });

  const renderExcessLabel = (count: number, max: number) => {
    if (max > count) {
      return null;
    } else {
      return (
        <AutoLayout
          name="Avatar Group Excess Label"
          {...avatar}
          horizontalAlignItems={'center'}
          verticalAlignItems={'center'}
          fill={colors.neutral[100]}
        >
          <Text fontSize={14}>+{count - (max || 0)}</Text>
        </AutoLayout>
      );
    }
  };

  return (
    <AutoLayout name="Avatar Group" {...rest} spacing={spacing ? spacing : stacked ? -8 : 4}>
      {Array.isArray(children) ? (
        <>
          {children
            .filter((child: FigmaDeclarativeNode) => isAvatar(child))
            .slice(0, max)
            .map((child: any, index: number) => {
              return h(
                Avatar,
                {
                  ...child?.props,
                  size,
                  displayName: child.props.tooltip,
                  fill: child.props.src
                    ? { type: 'image', src: child.props.src }
                    : child.props.fill,
                  key: index,
                },
                child?.children
              );
            })}
          {renderExcessLabel(children.length, max)}
        </>
      ) : null}
    </AutoLayout>
  );
}

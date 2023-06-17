import { colors } from '../styles';
import { IconUser } from '../icons';
import { AvatarGroupProps, AvatarProps } from './interface';
import { getAvatarStyles } from './styles';

const { widget } = figma;
const { AutoLayout, Text, h } = widget;

const NODE_NAME_MAP = {
  avatar: 'Avatar',
  avatarGroup: 'Avatar Group',
  excessLabel: 'Avatar Group Excess Label',
};

const isAvatar = (node: any) => {
  return node.props?.name?.startsWith('Avatar');
};

export function Avatar({ src, size = 'md', fill, displayName, ...props }: AvatarProps) {
  const {
    avatar: { padding, ...restAvatarStyles },
  } = getAvatarStyles({ size });
  const initials =
    displayName
      ?.split(/\s+/)
      .map((str) => str[0])
      .join('') || '';

  const fallbackAvatar = (
    <AutoLayout
      name={NODE_NAME_MAP.avatar}
      {...props}
      tooltip={displayName}
      fill={fill || colors.neutral[300]}
      padding={padding}
      verticalAlignItems="center"
      horizontalAlignItems="center"
      {...restAvatarStyles}
    >
      {initials ? (
        <Text fill="#ffffff">{initials}</Text>
      ) : typeof fill === 'object' ? null : (
        <IconUser width="fill-parent" height="fill-parent" color={colors.white} />
      )}
    </AutoLayout>
  );

  return src ? (
    <AutoLayout
      name={NODE_NAME_MAP.avatar}
      {...props}
      tooltip={displayName}
      fill={{ type: 'image', src }}
      {...restAvatarStyles}
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
  const { avatar: avatarStyle } = getAvatarStyles({ size });

  const renderExcessLabel = (count: number, max: number) => {
    return count > max ? (
      <AutoLayout
        name={NODE_NAME_MAP.excessLabel}
        {...avatarStyle}
        horizontalAlignItems="center"
        verticalAlignItems="center"
        fill={colors.neutral[100]}
      >
        <Text fontSize={14}>+{count - (max || 0)}</Text>
      </AutoLayout>
    ) : null;
  };

  return (
    <AutoLayout
      name={NODE_NAME_MAP.avatarGroup}
      {...rest}
      spacing={spacing ? spacing : stacked ? -8 : 4}
    >
      {Array.isArray(children) ? (
        <>
          {children
            .filter((child: FigmaDeclarativeNode) => isAvatar(child))
            .slice(0, max)
            .map((child: any, index: number) => {
              const childProps: AvatarProps = child?.props || {};
              return h(
                Avatar,
                {
                  ...childProps,
                  size,
                  key: index,
                  displayName: childProps.tooltip,
                  fill: childProps.src ? { type: 'image', src: childProps.src } : childProps.fill,
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

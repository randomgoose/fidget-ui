import { colors } from '../styles';
import { IconUser } from '../icons';
import { AvatarProps } from './interface';
import { getAvatarStyles } from './styles';
import { useFetchGlobalConfig } from '../config-provider';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';
import { NODE_NAME_MAP, getInitials } from './utils';
import { splitProps } from '../utils';

const { widget } = figma;
const { AutoLayout, Text } = widget;

export function Avatar({ src, size = 'md', fill, displayName, style, ...props }: AvatarProps) {
  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyles({
    defaultStyle: getAvatarStyles({ size }),
    globalStyle: globalConfig.Avatar?.style,
    propStyle: style,
  });

  const { autoLayoutProps, textProps } = splitProps(styles.avatar);

  const initials = getInitials(displayName);

  const fallbackAvatar = (
    <AutoLayout
      name={NODE_NAME_MAP.avatar}
      {...props}
      tooltip={displayName}
      fill={fill || colors.neutral[300]}
      verticalAlignItems="center"
      horizontalAlignItems="center"
      {...autoLayoutProps}
    >
      {initials ? (
        <Text {...textProps}>{initials}</Text>
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
      {...autoLayoutProps}
      padding={0}
    />
  ) : (
    fallbackAvatar
  );
}

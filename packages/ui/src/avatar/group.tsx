import { Avatar } from './avatar';
import { NODE_NAME_MAP, isAvatar } from './utils';
import { AvatarGroupProps, AvatarProps } from './interface';
import { getAvatarStyles } from './styles';
import { useFetchGlobalConfig } from '../config-provider';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';
import { splitProps } from '../utils';

const { AutoLayout, Text, h } = figma.widget;

export function AvatarGroup({
  children,
  style,
  max = 5,
  size = 'md',
  stacked = false,
  spacing,
}: AvatarGroupProps) {
  const globalConfig = useFetchGlobalConfig();

  const styles = mergeUserDefinedStyles({
    defaultStyle: getAvatarStyles({ size: typeof size === 'string' ? size : 'md' }),
    globalStyle: globalConfig.Avatar?.style,
    propStyle: style,
  });

  const excessLabelProps = splitProps(styles.excessLabel);

  const renderExcessLabel = (count: number, max: number) => {
    return count > max ? (
      <AutoLayout name={NODE_NAME_MAP.excessLabel} {...excessLabelProps.autolayoutProps}>
        <Text {...excessLabelProps.textProps}>+{count - (max || 0)}</Text>
      </AutoLayout>
    ) : null;
  };

  return (
    <AutoLayout
      name={NODE_NAME_MAP.avatarGroup}
      spacing={spacing ? spacing : stacked ? -8 : 4}
      {...styles.avatarGroup}
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

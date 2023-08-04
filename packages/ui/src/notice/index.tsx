//@ts-nocheck
import { useFetchGlobalConfig } from '../config-provider';
import {
  IconCheckCircleSolid,
  IconExclamationCircleSolid,
  IconInformationCircleSolid,
  IconXCircleSolid,
} from '../icons';
import { isSvg, renderChildren, renderIcon } from '../utils';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';
import { NoticeProps } from './interface';
import { getNoticeStyles } from './styles';

const { AutoLayout } = figma.widget;

const NODE_NAME_MAP = {
  root: 'Notice',
  icon: 'Notice Icon Container',
  content: 'Notice Content',
};

export function Notice({
  variant,
  status,
  icon = true,
  title,
  description,
  children,
  style,
  ...rest
}: NoticeProps) {
  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyles({
    defaultStyle: getNoticeStyles({ variant, status }),
    globalStyle: globalConfig.Notice?.style,
    propStyle: style,
  });

  const renderIconNode = () => {
    const { icon: iconStyle } = styles;
    if (isSvg(icon)) {
      return renderIcon({
        svg: icon,
        options: {
          stroke: iconStyle.stroke,
          fill: iconStyle.fill,
        },
      });
    } else {
      switch (status) {
        case 'warning':
          return (
            <IconExclamationCircleSolid
              width={iconStyle.width}
              height={iconStyle.height}
              color={iconStyle.fill as string}
            />
          );
        case 'error':
          return (
            <IconXCircleSolid
              width={iconStyle.width}
              height={iconStyle.height}
              color={iconStyle.fill as string}
            />
          );
        case 'success':
          return (
            <IconCheckCircleSolid
              width={iconStyle.width}
              height={iconStyle.height}
              color={iconStyle.fill as string}
            />
          );
        default:
          return (
            <IconInformationCircleSolid
              width={iconStyle.width}
              height={iconStyle.height}
              color={iconStyle.fill as string}
            />
          );
      }
    }
  };

  return (
    <AutoLayout {...styles.container} {...rest} name={NODE_NAME_MAP.root}>
      {icon ? (
        <AutoLayout name={NODE_NAME_MAP.icon} padding={{ top: 2 }}>
          {renderIconNode()}
        </AutoLayout>
      ) : null}

      <AutoLayout name={NODE_NAME_MAP.content} direction="vertical" width="fill-parent">
        {renderChildren(title, { textProps: styles.title })}
        {renderChildren(description, { textProps: styles.description })}
        {renderChildren(children, { textProps: styles.description })}
      </AutoLayout>
    </AutoLayout>
  );
}

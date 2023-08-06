import { useFetchGlobalConfig } from '../config-provider';
import { renderChildren } from '../utils';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';
import { DividerProps } from './interface';
import { getDividerStyles } from './styles';

const { widget } = figma;
const { AutoLayout, Rectangle } = widget;

const NODE_NAME_MAP = {
  divider: 'Divider',
  dividerContainer: 'Divider Container',
};

export function Divider({
  children,
  stroke,
  orientation = 'horizontal',
  margin = orientation === 'horizontal' ? { top: 4, bottom: 4 } : { left: 4, right: 4 },
  style,
}: DividerProps) {
  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyles({
    globalStyle: globalConfig.Divider?.style,
    propStyle: style,
    defaultStyle: getDividerStyles({ orientation }),
  });

  const renderDivider = (orientation: 'horizontal' | 'vertical') => {
    return (
      <Rectangle
        name={NODE_NAME_MAP.divider}
        fill={stroke || styles.divider.fill}
        {...(orientation === 'horizontal'
          ? { width: 'fill-parent', height: 1 }
          : { width: 1, height: 'fill-parent' })}
      />
    );
  };

  return (
    <AutoLayout name={NODE_NAME_MAP.dividerContainer} {...styles.container} padding={margin}>
      {Array.isArray(children) && children.length > 0 ? (
        <>
          {renderDivider(orientation)}
          {renderChildren(children, { textProps: { ...styles.text } })}
          {/* <Text name="Divider Text" {...text}>{children[0]}</Text> */}
          {renderDivider(orientation)}
        </>
      ) : (
        renderDivider(orientation)
      )}
    </AutoLayout>
  );
}

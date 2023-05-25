import { renderChildren } from '../utils';
import { DividerProps } from './interface';
import { getDividerStyles } from './styles';

const { widget } = figma;
const { AutoLayout, Rectangle } = widget;

export function Divider({ orientation = 'horizontal', children, margin, stroke }: DividerProps) {
  const { container, text, divider } = getDividerStyles({ orientation });

  const renderDivider = (orientation: 'horizontal' | 'vertical') => {
    return orientation === 'horizontal' ? (
      <Rectangle name="Divider" width={'fill-parent'} height={1} fill={stroke || divider.fill} />
    ) : (
      <Rectangle name="Divider" height={'fill-parent'} width={1} fill={stroke || divider.fill} />
    );
  };

  const defaultMargin: AutoLayoutProps['padding'] =
    orientation === 'horizontal' ? { top: 4, bottom: 4 } : { left: 4, right: 4 };

  return (
    <AutoLayout name="Divider Container" {...container} padding={margin || defaultMargin}>
      {Array.isArray(children) && children.length > 0 ? (
        <>
          {renderDivider(orientation)}
          {renderChildren(children, { textProps: { ...text } })}
          {/* <Text name="Divider Text" {...text}>{children[0]}</Text> */}
          {renderDivider(orientation)}
        </>
      ) : (
        renderDivider(orientation)
      )}
    </AutoLayout>
  );
}

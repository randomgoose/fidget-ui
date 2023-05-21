import { SimpleGridProps } from './interface';

const { widget } = figma;
const { AutoLayout } = widget;

export function SimpleGrid({
  children,
  columns = 3,
  spacing,
  spacingX,
  spacingY,
  width = 'fill-parent',
  height = 'fill-parent',
  ...rest
}: SimpleGridProps) {
  const computedSpacing = {
    x: spacingX ? spacingX : spacing ? spacing : 0,
    y: spacingY ? spacingY : spacing ? spacing : 0,
  };

  const splitChildren = (children: FigmaDeclarativeNode, columns: number) => {
    const res = [];

    if (Array.isArray(children)) {
      for (let i = 0; i < children.length; i += columns) {
        res.push(children.slice(i, i + columns));
      }
    }

    return res;
  };

  return (
    <AutoLayout
      name="Simple Grid"
      {...rest}
      direction={'vertical'}
      spacing={computedSpacing.y}
      overflow={'visible'}
      width={width}
      height={height}
    >
      {Array.isArray(children)
        ? splitChildren(children, columns).map((group, index) => (
            <AutoLayout
              name="Row"
              key={index}
              width={'fill-parent'}
              spacing={computedSpacing.x}
              overflow={'visible'}
              height={typeof height === 'number' ? 'fill-parent' : height}
            >
              {group.map((item, index) => (
                <AutoLayout
                  overflow="visible"
                  name="Cell"
                  key={index}
                  width={width}
                  height={typeof height === 'number' ? 'fill-parent' : height}
                >
                  {item}
                </AutoLayout>
              ))}
            </AutoLayout>
          ))
        : null}
    </AutoLayout>
  );
}

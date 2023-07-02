import { SimpleGridProps } from './interface';

const { widget } = figma;
const { AutoLayout } = widget;

const NODE_NAME_MAP = {
  grid: 'Simple Grid',
  row: 'Row',
  cell: 'Cell',
};

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
  const rowHeight = typeof height === 'number' ? 'fill-parent' : height;

  const splitChildren = (
    children: FigmaDeclarativeNode,
    columns: number
  ): FigmaDeclarativeNode[][] => {
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
      name={NODE_NAME_MAP.grid}
      {...rest}
      direction="vertical"
      spacing={computedSpacing.y}
      overflow="visible"
      width={width}
      height={height}
    >
      {Array.isArray(children)
        ? splitChildren(children, columns).map((group, index) => (
            <AutoLayout
              key={index}
              name={NODE_NAME_MAP.row}
              width="fill-parent"
              spacing={computedSpacing.x}
              overflow="visible"
              height={rowHeight}
            >
              {group.map((item, index) => (
                <AutoLayout
                  key={index}
                  name={NODE_NAME_MAP.cell}
                  overflow="visible"
                  width={width}
                  height={rowHeight}
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

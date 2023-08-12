import { SimpleGrid, TextField, colors } from 'fidget-ui';

const { widget } = figma;
const { useSyncedState, AutoLayout, Text } = widget;

function getLocalSolidPaintStyles() {
  return figma
    .getLocalPaintStyles()
    .filter((style) => style.paints.length === 1 && style.paints[0].type === 'SOLID')
    .map((style) => ({
      name: style.name,
      paints: style.paints,
      key: style.key,
    }));
}

function Widget() {
  const [styles] = useSyncedState('styles', () => getLocalSolidPaintStyles());

  return (
    <AutoLayout
      verticalAlignItems={'center'}
      spacing={8}
      padding={16}
      cornerRadius={8}
      fill={'#FFFFFF'}
      stroke={'#E6E6E6'}
      width={640}
      direction="vertical"
    >
      <TextField id="search" value={''} onTextEditEnd={() => {}} />
      <SimpleGrid
        width={'fill-parent'}
        height={'hug-contents'}
        columns={8}
        spacingY={12}
        spacingX={12}
      >
        {...styles.map((style) => {
          const paint = style.paints[0];
          if (paint.type === 'SOLID') {
            const { r, g, b } = paint.color;
            return (
              <AutoLayout width={'fill-parent'} direction="vertical" key={style.key} spacing={4}>
                <AutoLayout
                  cornerRadius={4}
                  width={'fill-parent'}
                  height={40}
                  fill={{ type: 'solid', color: { r, g, b, a: 1 } }}
                ></AutoLayout>
                <Text fontSize={12} fill={colors.neutral[700]}>
                  {style.name}
                </Text>
              </AutoLayout>
            );
          }
        })}
      </SimpleGrid>
    </AutoLayout>
  );
}

widget.register(Widget);

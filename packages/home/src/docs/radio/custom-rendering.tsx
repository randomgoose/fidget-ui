import { Heading, RadioGroup, colors } from 'fidget-ui';
import { IconCheck } from 'fidget-ui/icons';
import { Case } from '../../components/case';
import { P, Pre } from '../typography';
import { Preview } from '../../components/preview';

const { AutoLayout, Text } = figma.widget;

export function CustomRendering() {
  return (
    <>
      <Heading as={'h5'}>Custom Rendering</Heading>
      <P>
        If you need to customize the apperance of radios, pass in a function returning Figma nodes
        or components to the <Pre>render</Pre> prop.
      </P>

      <Preview
        id="radio/custom-rendering"
        code={`import { RadioGroup } from 'fidget-ui'

const { AutoLayout, Text } = figma.widget;

() => <RadioGroup
  name="custom"
  orientation={'vertical'}
  options={[
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' },
    { value: 'c', label: 'Option C', disabled: true },
  ]}
  onChange={(option) => {
    figma.notify(option.value);
  }}
  render={({ checked, option: { label } }) => (
    <AutoLayout
      stroke={checked ? colors.blue[500] : colors.neutral[300]}
      fill={checked ? colors.blue[500] : undefined}
      padding={16}
      height={56}
      width={240}
      verticalAlignItems={'center'}
      cornerRadius={6}
    >
      <AutoLayout
        width={24}
        height={24}
        padding={4}
        verticalAlignItems={'center'}
        horizontalAlignItems={'center'}
      >
        {checked ? <IconCheck color={colors.white} /> : null}
      </AutoLayout>
      <Text fill={checked ? colors.white : colors.neutral[900]}>{label as string}</Text>
</AutoLayout>
)}/>
            `}
      >
        <Case height={240} spacing={8}>
          <RadioGroup
            name="custom"
            orientation={'vertical'}
            options={[
              { value: 'a', label: 'Option A' },
              { value: 'b', label: 'Option B' },
              { value: 'c', label: 'Option C', disabled: true },
            ]}
            onChange={(option) => {
              figma.notify(option.value);
            }}
            render={({ checked, option: { label } }) => (
              <AutoLayout
                stroke={checked ? colors.blue[500] : colors.neutral[300]}
                fill={checked ? colors.blue[500] : undefined}
                padding={16}
                height={56}
                width={240}
                verticalAlignItems={'center'}
                cornerRadius={6}
              >
                <AutoLayout
                  width={24}
                  height={24}
                  padding={4}
                  verticalAlignItems={'center'}
                  horizontalAlignItems={'center'}
                >
                  {checked ? <IconCheck color={colors.white} /> : null}
                </AutoLayout>
                <Text fill={checked ? colors.white : colors.neutral[900]}>{label as string}</Text>
              </AutoLayout>
            )}
          />
        </Case>
      </Preview>
    </>
  );
}

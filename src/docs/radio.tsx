import { Button, Heading, RadioGroup } from '../components';
import { Divider } from '../components/divider';
import { IconCheck } from '../icons';
import { colors } from '../styles';
import { renderChildren } from '../utils';
import { docStyle } from './styles';
import { Code, P, Pre } from './typography';

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

export function RadioDoc() {
  const [animals, setAnimals] = useSyncedState('animals', 'cats');

  return (
    <AutoLayout name="Radio Doc" {...docStyle}>
      <Heading as="h1">Radio</Heading>
      <P>Use Radio when users need to select only one from multiple options.</P>
      <Divider />

      <Heading as="h5">RadioGroup</Heading>
      <P>
        Provide a series of radios with <Pre>RadioGroup</Pre> component. A unique <Pre>name</Pre> is
        required as the component keeps the selection in an internal state, which uses name as a
        key.
      </P>
      <P>
        Pass in an array of options to <Pre>options</Pre> prop to render them as radios.
      </P>
      <RadioGroup
        name={'radio-doc/a'}
        options={[
          { value: 'dogs', label: 'Dogs' },
          { value: 'cats', label: 'Cats' },
          { value: 'sheep', label: 'Sheep' },
        ]}
        onChange={({ value }) => figma.notify(`You selected ${value}.`)}
      />

      <Code>
        {`const [animal, setAnimal] = useSyncedState("animal", "cat");

return <RadioGroup
    name={"options"}
    options={[
        { value: "dogs", label: "Dogs" },
        { value: "cats", label: "Cats" },
        { value: "sheep", label: "Sheep" },
    ]}
    onChange={({ value }) => figma.notify(value)}/>`}
      </Code>

      <Heading as={'h5'}>Controlled RadioGroup</Heading>

      <AutoLayout spacing={8}>
        <Button variant="outline" onClick={() => setAnimals('dogs')}>
          Select dogs
        </Button>
        <Button variant="outline" onClick={() => setAnimals('cats')}>
          Select cats
        </Button>
        <Button variant="outline" onClick={() => setAnimals('sheep')}>
          Select sheep
        </Button>
      </AutoLayout>
      <RadioGroup
        name={'radio-doc/b'}
        value={animals}
        options={[
          { value: 'dogs', label: 'Dogs' },
          { value: 'cats', label: 'Cats' },
          { value: 'sheep', label: 'Sheep' },
        ]}
        onChange={({}) => figma.notify(`Click buttons to change the value.`)}
      />

      <Heading as={'h5'}>Orientation</Heading>
      <P>
        By default, the radios are horizontally placed. Change the <Pre>orientation</Pre> prop to{' '}
        <Pre>vertical</Pre> to vertically stack radios.
      </P>
      <RadioGroup
        name={'radio-doc/c'}
        orientation={'vertical'}
        options={[
          { value: 'dogs', label: 'Dogs' },
          { value: 'cats', label: 'Cats' },
          { value: 'sheep', label: 'Sheep' },
        ]}
        onChange={({ value }) => figma.notify(`You selected ${value}.`)}
      />

      <Heading as={'h5'}>Disabled radios</Heading>
      <P>
        Disable radios by adding <Pre>{`{ disabled: true }`}</Pre> to options. Disabled radios
        cannot be manually selected.
      </P>

      <RadioGroup
        name="more options"
        orientation={'vertical'}
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
          { value: 'c', label: 'Option C', disabled: true },
        ]}
        onChange={(option) => {
          figma.notify(option.value);
        }}
      />

      <Code>
        {`return <RadioGroup
    name={"options"}
    options={[
        { value: "a", label: "Option A" },
        { value: "b", label: "Option B" },
        { value: "c", label: "Option C", disabled: true },
    ]}
    onChange={({ value }) => setAnimal(value)}/>`}
      </Code>

      <Heading as={'h5'}>Custom Rendering</Heading>

      <P>
        If you need to customize the apperance of radios, pass in a function returning Figma nodes
        or components to the <Pre>render</Pre> prop.
      </P>

      <RadioGroup
        name="custom"
        orientation={'vertical'}
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
          { value: 'c', label: 'Option C', disabled: true },
        ]}
        onChange={(option) => {
          console.log(option);
          figma.notify(option.value);
        }}
        render={({ checked, option: { label, value } }) => (
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
            {renderChildren(label, {
              textProps: {
                fill: checked ? colors.white : colors.neutral[900],
                fontWeight: 'bold',
              },
            })}
          </AutoLayout>
        )}
      />

      <Code>
        {`return <RadioGroup
    name={"options"}
    options={[
        { value: "a", label: "Option A" },
        { value: "b", label: "Option B" },
        { value: "c", label: "Option C", disabled: true },
    ]}
    onChange={({ value }) => setAnimal(value)}
    render={(checked, option) => checked ? <CustomCheckedRadio /> : <CustomUncheckedRadio /> }
/>`}
      </Code>
    </AutoLayout>
  );
}

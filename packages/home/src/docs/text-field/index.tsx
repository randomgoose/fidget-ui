import { Heading, TextField, Divider, Tabs } from 'fidget-ui';
import { codeStyle, docStyle } from '../styles';
import { P, Pre } from '../typography';
import { Case } from '../../components/case';
import InputElements from './input-elements';
import InputAddons from './input-addons';
import DisabledTextFields from './disabled-text-fields';
import TextFieldUsage from './usage';
import { APIs } from '../../components';

const { widget } = figma;
const { useSyncedState, AutoLayout, Span } = widget;

export function TextFieldDoc() {
  const [value, setValue] = useSyncedState('value', '');

  return (
    <AutoLayout name="Text Field Doc" {...docStyle}>
      <Heading as={'h1'}>TextField</Heading>
      <P>
        TextField extends the built-in <Span {...codeStyle}>Input</Span> component.
      </P>
      <Divider />

      <TextFieldUsage />

      <Heading as="h5">Variants</Heading>
      <P>
        Set <Pre>variant</Pre> prop to change the appearance of TextField components. Available
        options include <Pre>outline, filled</Pre> and <Pre>flush</Pre>.
      </P>

      <Tabs
        id="text-field/variants"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} spacing={8} direction="vertical">
                <TextField
                  id="z592"
                  value={value}
                  onTextEditEnd={(e) => setValue(e.characters)}
                  placeholder={'TextField [variant=outline]'}
                  width={240}
                />
                <TextField
                  id="jt93"
                  variant="filled"
                  value={value}
                  onTextEditEnd={(e) => setValue(e.characters)}
                  placeholder={'TextField [variant=filled]'}
                  width={240}
                />
                <TextField
                  id="05k2"
                  variant="flush"
                  value={value}
                  onTextEditEnd={(e) => setValue(e.characters)}
                  placeholder={'TextField [variant=flush]'}
                  width={240}
                />
              </Case>
            ),
          },
        ]}
      />

      <Heading as="h5">Sizes</Heading>
      <P>
        TextField comes in with three sizes: <Pre>lg(40px), md(32px)</Pre> and <Pre>sm(28px)</Pre>.
      </P>

      <Tabs
        id="text-field/sizes"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} spacing={8} direction="vertical">
                <TextField
                  id="zb72"
                  size={'lg'}
                  value={value}
                  onTextEditEnd={(e) => setValue(e.characters)}
                  placeholder={'TextField [size=lg]'}
                  width={240}
                />
                <TextField
                  id="94n2"
                  size={'md'}
                  value={value}
                  onTextEditEnd={(e) => setValue(e.characters)}
                  placeholder={'TextField [size=md]'}
                  width={240}
                />
                <TextField
                  id="lo22"
                  size={'sm'}
                  value={value}
                  onTextEditEnd={(e) => setValue(e.characters)}
                  placeholder={'TextField [size=sm]'}
                  width={240}
                />
              </Case>
            ),
          },
        ]}
      />

      <InputElements />
      <InputAddons />
      <DisabledTextFields />

      <APIs code={`__FIDGET_COMPONENT_API`} />
    </AutoLayout>
  );
}

import { Heading, TextField, Divider, Tabs } from 'fidget-ui';
import { codeStyle, docStyle } from '../styles';
import { Code, P, Pre } from '../typography';
import { Case } from '../../components/case';
import InputElements from './input-elements';
import InputAddons from './input-addons';
import DisabledTextFields from './disabled-text-fields';

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
      <Heading as="h5">Usage</Heading>
      <P>
        Use <Pre>TextField</Pre> component in the same way of <Pre>Input</Pre>. Pass{' '}
        <Pre>value</Pre> and <Pre>onTextEditEnd</Pre> to enable text editing.
      </P>

      <Tabs
        id="text-field/usage"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} spacing={8} padding={{ horizontal: 48 }}>
                <TextField
                  id="p9o5"
                  value={value}
                  onTextEditEnd={(e) => setValue(e.characters)}
                  placeholder={'Type something'}
                  width={240}
                />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<TextField
  id="p9o5"
  value={value}
  onTextEditEnd={(e) => setValue(e.characters)}
  placeholder={'Type something'}
  width={240}
/>`}
              </Code>
            ),
          },
        ]}
      />

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
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {` <TextField
  id='z592'
  value={value}
  onTextEditEnd={(e) => setValue(e.characters)}
  placeholder={'TextField [variant=outline]'}
  width={240}
/>
<TextField
  id='jt93'
  variant="filled"
  value={value}
  onTextEditEnd={(e) => setValue(e.characters)}
  placeholder={'TextField [variant=filled]'}
  width={240}
/>
<TextField
  id='05k2'
  variant="flush"
  value={value}
  onTextEditEnd={(e) => setValue(e.characters)}
  placeholder={'TextField [variant=flush]'}
  width={240}
/>`}
              </Code>
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
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<TextField
  id='zb72'
  size={'lg'}
  value={value}
  onTextEditEnd={(e) => setValue(e.characters)}
  placeholder={'TextField [size=lg]'}
  width={240}
/>
<TextField
  id='94n2'
  size={'md'}
  value={value}
  onTextEditEnd={(e) => setValue(e.characters)}
  placeholder={'TextField [size=md]'}
  width={240}
/>
<TextField
  id='lo22'
  size={'sm'}
  value={value}
  onTextEditEnd={(e) => setValue(e.characters)}
  placeholder={'TextField [size=sm]'}
  width={240}
/>`}
              </Code>
            ),
          },
        ]}
      />

      <InputElements />
      <InputAddons />
      <DisabledTextFields />
    </AutoLayout>
  );
}

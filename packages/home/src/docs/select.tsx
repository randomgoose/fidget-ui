import { Heading, Select, Divider, colors } from 'fidget-ui';
import { codeStyle, docStyle } from './styles';
import { P, Pre } from './typography';

const { widget } = figma;
const { AutoLayout, useSyncedState, Span } = widget;

const OPTIONS: any[] = [
  { value: 'alpha', label: 'Alpha' },
  { value: 'beta', label: 'Beta' },
  { value: 'gamma', label: 'Gamma' },
];

export function SelectDoc() {
  const [letter, setLetter] = useSyncedState('select-doc/a', 'alpha');

  return (
    <AutoLayout {...docStyle} name={'Select Doc'}>
      <Heading as="h1">Select</Heading>

      <P>Select component allows users to select from multiple options from a dropdown list.</P>

      <Divider />

      <AutoLayout width={'fill-parent'} fill={colors.blue[50]} padding={16} cornerRadius={6}>
        <P fill={colors.blue[900]}>
          Notice: An <Span {...codeStyle}>id</Span> prop is required for each Select component as
          the component keeps an internal state to conditionally render the dropdown list.
        </P>
      </AutoLayout>

      <Heading as="h5">Usage</Heading>

      <P>
        Pass in an array of options and get user selection from the <Pre>onChange</Pre> callback.
      </P>
      <Select
        id={'doc/select/a'}
        placeholder="Select a letter"
        width={240}
        options={OPTIONS}
        onChange={(option) => setLetter(option.value)}
      />
      <P>You selected: {letter}</P>

      <Heading as={'h5'}>Variants</Heading>

      <AutoLayout spacing={24} overflow={'visible'}>
        {['filled', 'outline', 'flush'].map((variant) => (
          <Select
            variant={variant as any}
            key={variant}
            placeholder="Select a letter"
            width={128}
            id={`doc/select/${variant}`}
            options={OPTIONS}
            onChange={(option) => setLetter(option.value)}
          />
        ))}
      </AutoLayout>

      <Heading as="h5">Popper Placement</Heading>

      <P>
        You may notice some of the poppers are blocked by elements below. This is because the
        default canvas stacking order in Figma widets is "last on top".
      </P>
      <P>
        In this case, you can set the <Pre>placement</Pre> prop as <Pre>top</Pre> to place the
        popper on the other side.
      </P>
      <Select
        id={'doc/select/top'}
        placeholder="Select a letter"
        width={240}
        options={OPTIONS}
        placement={'top'}
      />
    </AutoLayout>
  );
}

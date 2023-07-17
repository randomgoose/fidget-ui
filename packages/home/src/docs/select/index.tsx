import { Heading, Divider, colors } from 'fidget-ui';
import { codeStyle, docStyle } from '../styles';
import { P } from '../typography';
import SelectUsage from './usage';
import SelectVariants from './variants';
import SelectPlacement from './placement';

const { widget } = figma;
const { AutoLayout, Span } = widget;

export function SelectDoc() {
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

      <SelectUsage />
      <SelectVariants />
      <SelectPlacement />
    </AutoLayout>
  );
}

import { DatePicker, Divider, Heading } from 'fidget-ui';
import { docStyle } from './styles';
import { P, Pre } from './typography';

const { AutoLayout, Text } = figma.widget;

export function DatePickerDoc() {
  return (
    <AutoLayout name="Date Picker Doc" {...docStyle} overflow="visible">
      <Heading as="h1">Date Picker</Heading>
      <P>Select a date from a calendar.</P>
      <Divider />
      <Heading as="h5">Usage</Heading>
      {/* <Heading /> */}
      {/* <Text>hidaw</Text> */}
      <DatePicker />

      <Heading as="h5">Field styles</Heading>
      <P>
        The datepicker field extends a basic field component. Style props such as <Pre>variant</Pre>{' '}
        and <Pre>size</Pre> also apply.
      </P>
      <AutoLayout direction="vertical" overflow="visible" spacing={8} width={240}>
        <DatePicker id="l3ji" size="lg" variant="filled" />
        <DatePicker id="kw25" size="lg" variant="flush" />
        <DatePicker id="kw25" size="lg" />
      </AutoLayout>
    </AutoLayout>
  );
}

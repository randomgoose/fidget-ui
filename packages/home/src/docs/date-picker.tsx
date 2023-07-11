import { DatePicker, Divider, Heading } from 'fidget-ui';
import { docStyle } from './styles';
import { P, Pre } from './typography';
import { Case } from '../components/case';

const { AutoLayout } = figma.widget;

// const PLACEMENT_OPTIONS = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'];

export function DatePickerDoc() {
  return (
    <AutoLayout name="Date Picker Doc" {...docStyle} overflow="visible">
      <Heading as="h1">Date Picker</Heading>
      <P>Select a date from a calendar.</P>
      <Divider />
      <Heading as="h5">Usage</Heading>
      <DatePicker />

      <Heading as="h5">Field styles</Heading>
      <P>
        The datepicker field extends a basic field component. Style props such as <Pre>variant</Pre>{' '}
        and <Pre>size</Pre> also apply.
      </P>

      <Case height={180} direction="vertical" spacing={16}>
        <DatePicker id="kw22" size="xs" />
        <DatePicker id="l3ji" variant="filled" />
        <DatePicker id="kw25" variant="flush" />
      </Case>

      <Heading as="h5">Format</Heading>
      <DatePicker format={'DD/MM/YYYY'} />
    </AutoLayout>
  );
}

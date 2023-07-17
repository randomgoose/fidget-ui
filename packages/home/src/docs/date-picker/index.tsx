import { Divider, Heading } from 'fidget-ui';
import { docStyle } from '../styles';
import { P } from '../typography';
import DatePickerUsage from './usage';
import DatePickerFieldStyles from './field-styles';
import DatePickerFormat from './format';

const { AutoLayout } = figma.widget;

// const PLACEMENT_OPTIONS = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'];

export function DatePickerDoc() {
  return (
    <AutoLayout name="Date Picker Doc" {...docStyle} overflow="visible">
      <Heading as="h1">Date Picker</Heading>
      <P>Select a date from a calendar.</P>
      <Divider />

      <DatePickerUsage />
      <DatePickerFieldStyles />
      <DatePickerFormat />
    </AutoLayout>
  );
}

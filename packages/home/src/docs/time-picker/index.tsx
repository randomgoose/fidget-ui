import { Heading } from 'fidget-ui';
import { docStyle } from '../styles';
import TimePickerUsage from './usage';

import DisabledTimePicker from './disabled-time-picker';

const { widget } = figma;
const { AutoLayout } = widget;

export function TimePickerDoc() {
  return (
    <AutoLayout name="Time Picker Doc" {...docStyle}>
      <Heading as="h1">Time Picker</Heading>
      <TimePickerUsage />
      <DisabledTimePicker />
    </AutoLayout>
  );
}

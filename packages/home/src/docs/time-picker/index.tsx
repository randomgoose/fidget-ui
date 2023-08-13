import { Heading } from 'fidget-ui';
import { docStyle } from '../styles';
import TimePickerUsage from './usage';
import DisabledTimePicker from './disabled-time-picker';
import { APIs } from '../../components';

const { widget } = figma;
const { AutoLayout } = widget;

export function TimePickerDoc() {
  return (
    <AutoLayout name="Time Picker Doc" {...docStyle}>
      <Heading as="h1">Time Picker</Heading>
      <TimePickerUsage />
      <DisabledTimePicker />

      <APIs code={`__FIDGET_COMPONENT_API`} />
    </AutoLayout>
  );
}

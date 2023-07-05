import { DatePicker, DatePickerProps, Divider, Heading, RadioGroup } from 'fidget-ui';
import { docStyle } from './styles';
import { P, Pre } from './typography';
import { Case } from '../components/case';

const { AutoLayout, useSyncedState } = figma.widget;

const PLACEMENT_OPTIONS = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'];

export function DatePickerDoc() {
  const [placement, setPlacement] = useSyncedState<DatePickerProps['placement']>(
    'datepicker-doc/placement',
    'top'
  );

  return (
    <AutoLayout name="Date Picker Doc" {...docStyle} overflow="visible">
      <Heading as="h1">Date Picker</Heading>
      <P>Select a date from a calendar.</P>
      <Divider />
      <Heading as="h5">Usage</Heading>

      <Case height={180}>
        <DatePicker width={240} />
      </Case>

      <Heading as="h5">Placement</Heading>
      <RadioGroup
        name="placement"
        value={placement}
        onChange={(option) => setPlacement(option.value as DatePickerProps['placement'])}
        options={PLACEMENT_OPTIONS.map((option) => ({ value: option, label: option }))}
      />

      <Case height={180}>
        <DatePicker placement={placement} id="w83n" />
      </Case>

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

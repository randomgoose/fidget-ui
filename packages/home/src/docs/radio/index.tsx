import { Heading, Divider } from 'fidget-ui';
import { docStyle } from '../styles';
import { Code, P } from '../typography';
import RadioRadioGroup from './radio-group';
import ControlledRadioGroup from './controlled-radio-group';
import Orientation from './orientation';
import DisabledRadios from './disabled-radios';
import CustomRendering from './custom-rendering';

const { widget } = figma;
const { AutoLayout } = widget;

export function RadioDoc() {
  return (
    <AutoLayout name="Radio Doc" {...docStyle}>
      <Heading as="h1">Radio</Heading>
      <P>Use Radio when users need to select only one from multiple options.</P>
      <Divider />

      <Code>{`import { RadioGroup } from 'fidget-ui'`}</Code>
      <RadioRadioGroup />
      <ControlledRadioGroup />
      <Orientation />
      <DisabledRadios />
      <CustomRendering />
    </AutoLayout>
  );
}

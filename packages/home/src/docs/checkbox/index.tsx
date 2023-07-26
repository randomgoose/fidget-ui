import { Heading, Divider } from 'fidget-ui';
import { docStyle } from '../styles';
import { Code, P } from '../typography';
import { SingleCheckbox } from './single-checkbox';
import { DisabledCheckbox } from './disabled-checkbox';
import { CheckboxCheckboxGroup } from './checkbox-group';

const { AutoLayout } = figma.widget;

export function CheckboxDoc() {
  return (
    <AutoLayout name="Checkbox Doc" {...docStyle}>
      <Heading as="h1">Checkbox</Heading>
      <P>Checkboxes are used when users need to select multiple items from a series of options.</P>
      <Divider />
      <Code>{`import { Checkbox, CheckboxGroup } from "fidget-ui"`}</Code>

      <SingleCheckbox />
      <DisabledCheckbox />
      <CheckboxCheckboxGroup />
    </AutoLayout>
  );
}

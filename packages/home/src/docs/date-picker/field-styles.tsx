import { DatePicker, Heading, Tabs } from 'fidget-ui';
import { Code, P, Pre } from '../typography';
import { Case } from '../../components/case';

export default function DatePickerFieldStyles() {
  return (
    <>
      <Heading as="h5">Field styles</Heading>

      <P>
        The datepicker field extends a basic field component. Style props such as <Pre>variant</Pre>{' '}
        and <Pre>size</Pre> also apply.
      </P>

      <Tabs
        id="date-picker/field-styles"
        overflow="visible"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} direction="vertical" spacing={16}>
                <DatePicker id="kw22" size="sm" />
                <DatePicker id="l3ji" variant="filled" />
                <DatePicker id="kw25" variant="flush" />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code>
                {`<DatePicker id="kw22" size="sm" />
<DatePicker id="l3ji" variant="filled" />
<DatePicker id="kw25" variant="flush" />`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}

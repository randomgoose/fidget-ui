import { DatePicker, Heading, Tabs } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

export default function DatePickerUsage() {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <Tabs
        overflow="visible"
        id="date-picker/usage"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} overflow="visible">
                <DatePicker id="v3k5" />
              </Case>
            ),
            overflow: 'visible',
          },
          {
            key: 'code',
            tab: 'Code',
            children: <Code height={240}>{`<DatePicker id='v3k5' />`}</Code>,
          },
        ]}
      />
    </>
  );
}

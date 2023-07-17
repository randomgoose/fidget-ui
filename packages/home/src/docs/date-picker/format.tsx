import { Heading, DatePicker, Tabs } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

export default function DatePickerFormat() {
  return (
    <>
      <Heading as="h5">Format</Heading>

      <Tabs
        id="date-picker/format"
        overflow="visible"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <DatePicker id="k843" format={'DD/MM/YYYY'} />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: <Code height={240}>{`<DatePicker id="k843" format={'DD/MM/YYYY'} />`}</Code>,
          },
        ]}
      />
    </>
  );
}

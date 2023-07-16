import { Heading, Tabs, TimePicker } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

export default function TimePickerUsage() {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <Tabs
        id="time-picker/usage"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <TimePicker id="ak3v" placement="top" />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: <Code height={240}>{`<TimePicker id="ak3v" placement="top" />`}</Code>,
          },
        ]}
      />
    </>
  );
}

import { Heading, Tabs, TextField } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

export default function DisabledTextFields() {
  return (
    <>
      <Heading as="h5">Disabled Text Field</Heading>

      <Tabs
        id="text-field/disabled-text-fields"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240}>
                <TextField
                  width={240}
                  id="v74k"
                  value={''}
                  onTextEditEnd={() => {}}
                  disabled
                  placeholder="disabled"
                />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<TextField width={240} id="v74k" value={''} onTextEditEnd={() => { }} disabled placeholder="disabled" />`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}

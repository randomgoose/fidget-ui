import { Heading, RadioGroup } from 'fidget-ui';
import { P, Pre } from '../typography';
import { Preview } from '../../components/preview';
import { Case } from '../../components/case';

export function DisabledRadios() {
  return (
    <>
      <Heading as={'h5'}>Disabled radios</Heading>
      <P>
        Disable radios by adding <Pre>{`{ disabled: true }`}</Pre> to options. Disabled radios
        cannot be manually selected.
      </P>

      <Preview
        id="radio/disabled-radios"
        code={`<RadioGroup
    name="options"
    orientation={'vertical'}
    options={[
        { value: 'a', label: 'Option A' },
        { value: 'b', label: 'Option B' },
        { value: 'c', label: 'Option C', disabled: true },
    ]}
    onChange={(option) => {
        figma.notify(option.value);
    }}
/>`}
      >
        <Case height={240} spacing={8}>
          <RadioGroup
            name="more options"
            orientation={'vertical'}
            options={[
              { value: 'a', label: 'Option A' },
              { value: 'b', label: 'Option B' },
              { value: 'c', label: 'Option C', disabled: true },
            ]}
            onChange={(option) => {
              figma.notify(option.value);
            }}
          />
        </Case>
      </Preview>
    </>
  );
}

import { Heading, RadioGroup } from 'fidget-ui';
import { Case } from '../../components/case';
import { P, Pre } from '../typography';
import { Preview } from '../../components/preview';

export function RadioRadioGroup() {
  return (
    <>
      <Heading as="h5">RadioGroup</Heading>

      <P>
        Provide a series of radios with <Pre>RadioGroup</Pre> component. A unique <Pre>name</Pre> is
        required as the component keeps the selection in an internal state, which uses name as a
        key.
      </P>
      <P>
        Pass in an array of options to <Pre>options</Pre> prop to render them as radios.
      </P>

      <Preview
        id="radio/radio-group"
        code={`import { RadioGroup } from 'fidget-ui'

() => (
    <RadioGroup
        name={'w85k'}
        options={[
            { value: 'dogs', label: 'Dogs' },
            { value: 'cat', label: 'Cats' },
            { value: 'sheep', label: 'Sheep' }
    ]} />
)`}
      >
        <Case height={240} spacing={8}>
          <RadioGroup
            name={'radio-doc/a'}
            options={[
              { value: 'dogs', label: 'Dogs' },
              { value: 'cats', label: 'Cats' },
              { value: 'sheep', label: 'Sheep' },
            ]}
            onChange={({ value }) => figma.notify(`You selected ${value}.`)}
          />
        </Case>
      </Preview>
    </>
  );
}

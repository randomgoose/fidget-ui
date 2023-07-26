import { Heading, RadioGroup } from 'fidget-ui';
import { P, Pre } from '../typography';
import { Preview } from '../../components/preview';
import { Case } from '../../components/case';

export function Orientation() {
  return (
    <>
      <Heading as={'h5'}>Orientation</Heading>
      <P>
        By default, the radios are horizontally placed. Change the <Pre>orientation</Pre> prop to{' '}
        <Pre>vertical</Pre> to vertically stack radios.
      </P>

      <Preview
        id="radio/orientation"
        code={`() => <RadioGroup 
    orientation="vertical"
    name="animals"
    options={[
        { value: 'dogs', label: 'Dogs' },
        { value: 'cats', label: 'Cats' },
        { value: 'sheep', label: 'Sheep' }
    ]}
/>`}
      >
        <Case height={240} spacing={8}>
          <RadioGroup
            orientation="vertical"
            name={'radio/orientation-vertical'}
            options={[
              { value: 'dogs', label: 'Dogs' },
              { value: 'cats', label: 'Cats' },
              { value: 'sheep', label: 'Sheep' },
            ]}
          />
        </Case>
      </Preview>
    </>
  );
}

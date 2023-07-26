import { Button, Heading, RadioGroup } from 'fidget-ui';
import { Preview } from '../../components/preview';
import { Case } from '../../components/case';

const { AutoLayout, useSyncedState } = figma.widget;

export function ControlledRadioGroup() {
  const [animals, setAnimals] = useSyncedState('animals', 'cats');

  return (
    <>
      <Heading as={'h5'}>Controlled RadioGroup</Heading>

      <Preview
        id="radio/controlled-radio-group"
        code={`import { Button } from 'fidget-ui'

const { AutoLayout, useSyncedState } = figma.widget

export function ControlledRadioGroup() {
    const [animals, setAnimals] = useSyncedState('animals', 'cats')

    return <>
        <AutoLayout spacing={8}>
            <Button variant="outline" onClick={() => setAnimals('dogs')}>
                Select dogs
            </Button>
            <Button variant="outline" onClick={() => setAnimals('cats')}>
                Select cats
            </Button>
            <Button variant="outline" onClick={() => setAnimals('sheep')}>
                Select sheep
            </Button>
        </AutoLayout>

        <RadioGroup
            name={'c84n'}
            value={animals}
            options={[
                { value: 'dogs', label: 'Dogs' },
                { value: 'cats', label: 'Cats' },
                { value: 'sheep', label: 'Sheep' },
            ]}
            onChange={() => figma.notify("Click buttons to change the value.")}
        />
    </>
}`}
      >
        <Case height={240} spacing={32} direction="vertical">
          <AutoLayout spacing={8}>
            <Button variant="outline" onClick={() => setAnimals('dogs')}>
              Select dogs
            </Button>
            <Button variant="outline" onClick={() => setAnimals('cats')}>
              Select cats
            </Button>
            <Button variant="outline" onClick={() => setAnimals('sheep')}>
              Select sheep
            </Button>
          </AutoLayout>

          <RadioGroup
            name={'radio-doc/b'}
            value={animals}
            options={[
              { value: 'dogs', label: 'Dogs' },
              { value: 'cats', label: 'Cats' },
              { value: 'sheep', label: 'Sheep' },
            ]}
            onChange={() => figma.notify(`Click buttons to change the value.`)}
          />
        </Case>
      </Preview>
    </>
  );
}

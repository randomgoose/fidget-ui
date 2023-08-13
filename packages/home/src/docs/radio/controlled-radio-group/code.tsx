import { Button, RadioGroup } from 'fidget-ui';

const { AutoLayout, useSyncedState } = figma.widget;

export function ControlledRadioGroup() {
  const [animals, setAnimals] = useSyncedState('animals', 'cats');

  return (
    <>
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
    </>
  );
}

import { Heading, Button, Switch } from 'fidget-ui';
import { Case } from '../../components/case';
import { P, Pre } from '../typography';
import { Preview } from '../../components/preview';

const { AutoLayout, useSyncedState } = figma.widget;

export function ControlledSwitch() {
  const [checked, setChecked] = useSyncedState('switch/checked', false);

  return (
    <>
      <Heading as="h5">Controlled Switch</Heading>
      <P>
        Pass a <Pre>checked</Pre> prop to control the state of a Switch. Controlled Switch
        components do not require an <Pre>id</Pre>.
      </P>

      <Preview
        id="swtich/controlled-swtich"
        code={`import { Button, Switch } from 'fidget-ui'

const { AutoLayout, useSyncedState } = figma.widget

function ControlledSwitch() {
    const [checked, setChecked] = useSyncedState('checked', false);

    return <AutoLayout spacing={8} verticalAlignItems={'center'}>
        <Button size="sm" variant="outline" onClick={() => setChecked((prev) => !prev)}>Toggle</Button>
        <Switch id='hk91' checked={checked} />
  </AutoLayout>
}
`}
      >
        <Case height={240}>
          <AutoLayout spacing={8} verticalAlignItems={'center'}>
            <Button size="sm" variant="outline" onClick={() => setChecked((prev) => !prev)}>
              Toggle
            </Button>
            <Switch id="hk91" checked={checked} />
          </AutoLayout>
        </Case>
      </Preview>
    </>
  );
}

import { Heading, Switch } from 'fidget-ui';
import { Case } from '../../components/case';
import { Preview } from '../../components/preview';
import { P, Pre } from '../typography';

const { AutoLayout } = figma.widget;

export function SwitchUsage() {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <AutoLayout direction="vertical" spacing={4} width={'fill-parent'}>
        <P>Use a Switch component to toggle states.</P>
        <P>
          · Pass a <Pre>defaultChecked</Pre> prop to set the initial state of a Switch.
        </P>
        <P>
          · Pass a <Pre>onChange</Pre> callback to get
        </P>
      </AutoLayout>

      <Preview
        id="switch/single-checkbox"
        code={`import { Switch } from 'fidget-ui'

const { Text } = figma.widget;
  
() => <Switch id="ht5o" onChange={checked => { figma.notify(checked ? 'on' : 'off') }} />`}
      >
        <Case height={240}>
          <Switch
            id="ht5o"
            onChange={(checked) => {
              figma.notify(`Switched ${checked ? 'on' : 'off'}.`);
            }}
          />
        </Case>
      </Preview>
    </>
  );
}

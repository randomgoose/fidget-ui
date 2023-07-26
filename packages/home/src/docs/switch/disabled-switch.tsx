import { Heading, Switch } from 'fidget-ui';
import { Case } from '../../components/case';
import { Preview } from '../../components/preview';

export function DisabledSwitch() {
  return (
    <>
      <Heading as="h5">Disabled Switch</Heading>

      <Preview
        id="switch/disabled-switch"
        code={`import { Switch } from 'fidget-ui'

() => <>
    <Switch id='p2j5' disabled checked />
    <Switch id='j6k3' disabled checked={false} />
</>`}
      >
        <Case height={240} spacing={8}>
          <Switch id="p2j5" disabled checked />
          <Switch id="j6k3" disabled checked={false} />
        </Case>
      </Preview>
    </>
  );
}

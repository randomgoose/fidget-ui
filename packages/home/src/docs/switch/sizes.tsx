import { Heading, Switch } from 'fidget-ui';
import { Case } from '../../components/case';
import { P, Pre } from '../typography';
import { Preview } from '../../components/preview';

export function SwitchSizes() {
  return (
    <>
      <Heading as="h5">Sizes</Heading>
      <P>
        Switch component comes in three sizes: <Pre>sm(16px), md(20px)</Pre> and <Pre>lg(28px)</Pre>
        .
      </P>

      <Preview
        id="switch/sizes"
        code={`import { Switch } from 'fidget-ui'

() => <>
    <Switch size="sm" id="sm" />
    <Switch id="m" id="md" />
    <Switch size="lg" id="lg" />
</>
`}
      >
        <Case height={240} spacing={8}>
          <Switch size="sm" id="s" />
          <Switch id="m" />
          <Switch size="lg" id="l" />
        </Case>
      </Preview>
    </>
  );
}

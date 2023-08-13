import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { P, Pre } from '../../typography';
import { SwitchUsage } from './code';

const { AutoLayout } = figma.widget;

export default function () {
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

      <Preview id="switch/single-checkbox" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240}>
          <SwitchUsage />
        </Case>
      </Preview>
    </>
  );
}

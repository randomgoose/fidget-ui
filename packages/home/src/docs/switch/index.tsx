import { Heading, Divider } from 'fidget-ui';
import { docStyle } from '../styles';
import { P } from '../typography';
import { SwitchUsage } from './usage';
import { ControlledSwitch } from './controlled-switch';
import { SwitchSizes } from './sizes';
import { CustomizeSwitchColors } from './customize-switch-colors';
import { DisabledSwitch } from './disabled-switch';

const { AutoLayout } = figma.widget;

export function SwitchDoc() {
  return (
    <AutoLayout {...docStyle} name={'Switch Doc'}>
      <Heading as="h1">Switch</Heading>
      <P>Switch copmonent is used to toggle between two states.</P>
      <Divider />
      <SwitchUsage />
      <ControlledSwitch />
      <SwitchSizes />
      <CustomizeSwitchColors />
      <DisabledSwitch />
    </AutoLayout>
  );
}

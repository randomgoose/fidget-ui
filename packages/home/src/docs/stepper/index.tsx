import { Divider, Heading } from 'fidget-ui';
import { docStyle } from '../styles';
import StepperUsage from './usage';
import StepperMinAndMax from './min-and-max';
import StepperSizes from './sizes';
import StepperStep from './step';
import ControlledSteppers from './controlled-stepper';
import StepperPrecision from './stepper-precision';
import { APIs } from '../../components';

const { AutoLayout } = figma.widget;

export function StepperDoc() {
  return (
    <AutoLayout {...docStyle}>
      <Heading as="h1">Stepper</Heading>
      <Divider />
      <StepperUsage />
      <ControlledSteppers />
      <StepperSizes />
      <StepperStep />
      <StepperMinAndMax />
      <StepperPrecision />

      <APIs code={`__FIDGET_COMPONENT_API`} />
    </AutoLayout>
  );
}

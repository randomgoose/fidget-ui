import { Heading, Stepper, Tabs } from 'fidget-ui';
import { Case } from '../../components/case';
import { Code } from '../typography';

export default function StepperSizes() {
  return (
    <>
      <Heading as="h5">Sizes</Heading>

      <Tabs
        id="stepper/sizes"
        items={[
          {
            key: 'preview',
            tab: 'Preview',
            children: (
              <Case height={240} direction="vertical" spacing={16}>
                <Stepper id="h53k" size={'sm'} />
                <Stepper id="rw25" />
                <Stepper id="li92" size={'lg'} />
              </Case>
            ),
          },
          {
            key: 'code',
            tab: 'Code',
            children: (
              <Code height={240}>
                {`<Stepper id='h53k' size={'sm'} />
<Stepper id='rw25' />
<Stepper id='li92' size={'lg'} />`}
              </Code>
            ),
          },
        ]}
      />
    </>
  );
}

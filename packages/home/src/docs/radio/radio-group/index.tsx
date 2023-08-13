import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { P, Pre } from '../../typography';
import { RadioGroupDemo } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">RadioGroup</Heading>

      <P>
        Provide a series of radios with <Pre>RadioGroup</Pre> component. A unique <Pre>name</Pre> is
        required as the component keeps the selection in an internal state, which uses name as a
        key.
      </P>

      <P>
        Pass in an array of options to <Pre>options</Pre> prop to render them as radios.
      </P>

      <Preview id="radio/radio-group" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <RadioGroupDemo />
        </Case>
      </Preview>
    </>
  );
}

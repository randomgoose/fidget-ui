import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { P, Pre } from '../../typography';
import { DisabledRadios } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Disabled radios</Heading>

      <P>
        Disable radios by adding <Pre>{`{ disabled: true }`}</Pre> to options. Disabled radios
        cannot be manually selected.
      </P>

      <Preview id="radio/disabled-radios" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <DisabledRadios />
        </Case>
      </Preview>
    </>
  );
}

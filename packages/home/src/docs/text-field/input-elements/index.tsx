import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { InputElements } from './code';
import { P, Pre } from '../../typography';

export default function () {
  return (
    <>
      <Heading as="h5">Input elements</Heading>

      <P width="fill-parent">
        Pass in <Pre>leftElement</Pre> and <Pre>rightElement</Pre> prop to add elements inside
        TextField components.
      </P>

      <Preview id="text-field/input-elements" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} direction="vertical" spacing={8}>
          <InputElements />
        </Case>
      </Preview>
    </>
  );
}

import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { TextFieldUsage } from './code';
import { P, Pre } from '../../typography';

export default function () {
  return (
    <>
      <Heading as="h5">Usage</Heading>

      <P>
        Use <Pre>TextField</Pre> component in the same way of <Pre>Input</Pre>. Pass{' '}
        <Pre>value</Pre> and <Pre>onTextEditEnd</Pre> to enable text editing.
      </P>

      <Preview id="text-field/usage" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8} padding={{ horizontal: 48 }}>
          <TextFieldUsage />
        </Case>
      </Preview>
    </>
  );
}

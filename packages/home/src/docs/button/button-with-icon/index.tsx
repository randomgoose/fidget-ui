import { Heading } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { ButtonWithIcon } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Button with icon</Heading>

      <P>
        Add left and right icons to Button components with <Pre>leftIcon</Pre> and{' '}
        <Pre>rightIcon</Pre> props. You can pass in Heroicons or custom <Pre>Svg</Pre> component.
      </P>

      <Preview id="button/button-with-icon" code={`__FIDGET_DEMO_CODE`}>
        <Case spacing={8} height={240}>
          <ButtonWithIcon />
        </Case>
      </Preview>
    </>
  );
}

import { Heading } from 'fidget-ui';
import { P, Pre } from '../../typography';
import { Case, Preview } from '../../../components';
import { ButtonVariants } from './code';

export default function () {
  return (
    <>
      <Heading as={'h5'}>Variants</Heading>

      <P>
        Set the <Pre>Variant</Pre> prop to control the style of Button components. Available
        variants include <Pre>filled</Pre>, <Pre>outline</Pre> and <Pre>ghost</Pre>.
      </P>

      <Preview id={'button_variants'} code={`__FIDGET_DEMO_CODE`}>
        <Case spacing={8} height={240}>
          <ButtonVariants />
        </Case>
      </Preview>
    </>
  );
}

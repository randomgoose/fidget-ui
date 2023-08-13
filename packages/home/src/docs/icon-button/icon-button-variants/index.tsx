import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { P, Pre } from '../../typography';
import { IconButtonVariants } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Variants</Heading>

      <P>
        Identical to Button <Pre>variant</Pre> prop.
      </P>

      <Preview id="icon-button/variants" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <IconButtonVariants />
        </Case>
      </Preview>
    </>
  );
}

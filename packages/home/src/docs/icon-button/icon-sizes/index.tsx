import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { P, Pre } from '../../typography';
import { IconButtonSizes } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Sizes</Heading>

      <P>
        Identical to Button <Pre>size</Pre> prop.
      </P>

      <Preview id="icon-button/sizes" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <IconButtonSizes />
        </Case>
      </Preview>
    </>
  );
}

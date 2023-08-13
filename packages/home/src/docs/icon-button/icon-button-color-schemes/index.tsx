import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { P, Pre } from '../../typography';
import { IconButtonColorSchemes } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Color Schemes</Heading>

      <P>
        Identical to Button <Pre>colorScheme</Pre> prop.
      </P>

      <Preview id="icon-button/color-schemes" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <IconButtonColorSchemes />
        </Case>
      </Preview>
    </>
  );
}

import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { P, Pre } from '../../typography';
import { CustomRendering } from './code';

export default function () {
  return (
    <>
      <Heading as={'h5'}>Custom Rendering</Heading>

      <P>
        If you need to customize the appearance of radios, pass in a function returning Figma nodes
        or components to the <Pre>render</Pre> prop.
      </P>

      <Preview id="radio/custom-rendering" code={`__FIDGET_DEMO_CODE`}>
        <Case height={240} spacing={8}>
          <CustomRendering />
        </Case>
      </Preview>
    </>
  );
}

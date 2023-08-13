import { Heading } from 'fidget-ui';
import { Case, Preview } from '../../../components';
import { TagColorSchemes } from './code';

export default function () {
  return (
    <>
      <Heading as="h5">Color Schemes</Heading>

      <Preview id="tag/color-schemes" code={`__FIDGET_DEMO_CODE`}>
        <Case padding={72} width={'fill-parent'} height={240} spacing={8}>
          <TagColorSchemes />
        </Case>
      </Preview>
    </>
  );
}
